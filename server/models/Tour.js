
const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    general_info:{
        tourName:{
            type:String,
            required:true
        },
        main_tour_type:{
            type:String
        },
        additional_tour_type:{
            type:String
        },
        tour_destination:{
            type:String
        },
        region:{
           type:String
        },
        starting_point:{
            type:String
        },
        arrival_time:{
            type:Date
        },
        final_destination:{
            type:String
        },
        tour_end_time:{
            type:Date
        },
    },
    important_info:{
        for_travels:{
            type:String
        },
        comments:{
            type:String
        }
    },
    pictures:{
        photos:[
            {
           url: {type:String}
        }
    ]
    },
    // images: [
    //     {
    //       url: {
    //         type: String,
    //         required: true,
    //       },
    //     },
    //   ]
    extra_service:{
        info:{
            type:String
        },
        list:[{
            name:{type:String},
            cost:{type:Number},
            commit:{type:String}
        }]
    },
    terms:{
        what_include:{
            type:String
        },
        what_not_include:{
            type:String
        },
        flights:{
            type:String
        }
    },
    tour_leader:{
        name:{
            type:String
        },
        guide_Peacture:{
            type:String
        },
        guide_info:{
            type:String
        }
    },
    day_by_day:{
        days:[{
            day_name:{
                type:String
            },
            day_city:{
                type:String
            },
            day_description:{
                type:String
            },
            // day_photos:[{
            //     type:String
            // }]
        }],
        // days_map:{
        //     type:String //image
        // }
    },
    details:{
        language_tip:{
            type:String
        },
        exertion_level:{
            type:{type:Number},
            info:{type:String}
        },
        ladging_level:{
            type:Number
        },
        accommodation_type:{
            type:String
        },
        accommodation:{
            type:String
        },
        hotel_name:{
            type:String
        },
        // images_hotel:[{
        //     type:String
        // }],
        allowable_age:{
            from:{
                type:Number
            },
            end:{
                type:Number
            }
        },
        suited_travels:{
            type:Boolean
        },
        tineary_animals:{
            type:Boolean
        },
        link_video:{
            type:String
        },
        tour_description:{
            type:String
        },
        main_impressions:{
            type:String
        },
        what_to_do:{
            type:String
        }

    },
    cancellation_policy:{
        type:String
    },
    price_dates:{
        available_for_instant_booking:{
            type:Boolean
        },
        tour_currency:{
            type:String,
            enum:['1','2','3'] //dollar, funt , ...
        },
        date_pereod:[
            {
                date_start:{type:Date},
                date_end:{type:Date},
                repeated_every_week:{type:Boolean},
                repeated_every_month:{type:Boolean},
                repeat_until:{type:Date},
                exclude_dates_from:{type:Date},
                exclude_dates_to:{type:Date}
            }
        ],
        available_from:{
            type:Number
        },
        available_overall:{
            type:Number
        },
        price:{
            type:Number
        },
        price_per:{
            type:Number
        },
        price_commit:{
            type:String
        },
        pre_payment:{
            amount:{type:Number},
            type:{
                type:String,
                enum:['1','2']
            }
        },
        accept_payment:{
            type:String
        },
        discount:{
            amount:{type:String},
            type:{
                type:String,
                enum:['1','2']
            }
        },
        valid_from:{
            type:Number
        },
        valid_to:{
            type:Number
        },
        rest_payment:{
            type:Number
        },
        tour_guranteed:{
            type:Boolean
        },
        flights_included:{
            type:Boolean
        },
        exploration:{
            type:Boolean
        }
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Tour', TourSchema);
const Tour = require('../models/Tour');
const md5 = require('md5');
const path = require('path');
const fs = require('fs');
const multer = require('multer')
const UploadFile=require('../config/Sharp')
const sharp = require('sharp')

exports.createOne = async (req, res, next) => {
    const data = req.body;
    const files = req.files;
        let urls = [];
        let thumb=[]
        // let orginal=`/public/uploads/org/${files[0].filename}`
        for(let i = 0; i < files.length; i++){
            const {filename} = files[i];
            await sharp(path.join(path.dirname(__dirname) + `/public/uploads/org/${filename}`) ).resize(450,600)
             .jpeg({
                    quality: 60
                })
                .toFile(path.join(path.dirname(__dirname) + `/public/uploads/thumb/${filename}`), (err)=>{
                    if(err) {
                        throw err
                    }
                    fs.unlink(path.join(path.dirname(__dirname) + `/public/uploads/org/${filename}`)  ,(error)=>{
                        if (error) {
                            throw error
                        }
                    })
                })
            urls.push({
                url:`/public/uploads/thumb/${filename}`
            })
        }
    const result = new Tour({
        general_info:{
            tourName:req.body.tourName,
            main_tour_type:data.main_tour_type,
            additional_tour_type:data.additional_tour_type,
            tour_destination:data.tour_destination,
            region:data.region,
            starting_point:data.starting_point,
            arrival_time:data.arrival_time,
            final_destination:data.final_destination,
            tour_end_time:data.tour_end_time,
        },
        important_info:{
            for_travels:data.for_travels,
            comments:data.important_comments
        },
        pictures:{
        photos:urls,
        },
        extra_service:{
            info:data.info,
            list:[{
                name:data.extra_name,
                cost:data.extr_cost,
                commit:data.extr_commit
            }]
        },
        terms:{
            what_include:data.what_include,
            what_not_include:data.what_not_include,
            flights:data.terms_flights
        },
        tour_leader:{
            name:data.tour_leader_name,
            guide_Peacture:data.guide_Peacture,
            guide_info:data.guide_info
        },
        day_by_day:{
            days:[{
                day_name:data.day_name,
                day_city:data.day_city,
                day_description:data.day_description,
                // day_photos:[{
                //     type:"String"
                // }]
            }],
            // days_map:{
            //     type:"String" //image
            // }
        },
        details:{
            language_tip:data.language_tip,
            exertion_level:{
                type:data.exertion_type,
                info:data.exertion_info
            },
            ladging_level:data.ladging_level,
            accommodation_type:data.accommodation_type,
            accommodation:data.accommodation,
            hotel_name:data.hotel_name,
            // images_hotel:[{
            //     type:"String" //image
            // }],
            allowable_age:{
                from:data.allowable_age_from,
                end:data.allowable_age_end
            },
            suited_travels:data.suited_travels,
            tineary_animals:data.tineary_animals,
            link_video:data.link_video,
            tour_description:data.tour_description,
            main_impressions:data.main_impressions,
            what_to_do:data.what_to_do
    
        },
        cancellation_policy:data.cancellation_policy,
        price_dates:{
            available_for_instant_booking:data.available_for_instant_booking,
            tour_currency:data.tour_currency,
            date_pereod:[
                {
                    date_start: data.pereod_date_start,
                    date_end: data.pereod_date_end,
                    repeated_every_week:data.repeated_every_week,
                    repeated_every_month:data.repeated_every_month,
                    repeat_until: data.pereod_repeat_until,
                    exclude_dates_from: data.pereod_exclude_dates_from,
                    exclude_dates_to: data.pereod_exclude_dates_to
                }
            ],
            available_from:data.available_from,
            available_overall:data.available_overall,
            price:data.price,
            price_per:data.price_per,
            price_commit:data.price_commit,
            pre_payment:{
                amount:data.pre_payment_amount,
                type:data.pre_payment_type
            },
            accept_payment:data.accept_payment,
            discount:{
                amount:data.discount_amount,
                type:data.discount_type
            },
            valid_from:data.valid_from,
            valid_to:data.valid_to,
            rest_payment:data.rest_payment,
            tour_guranteed:data.tour_guranteed,
            flights_included:data.flights_included,
            exploration:data.exploration
        }
    })
   await result.save() 
    .then(() => {
        res.status(200).json(result)
    })
    .catch((error) => {
        res.status(400).json({message: "Data is not created", data: error})
    })
}

exports.updateOne = async (req, res, next) => {
    const result = await Tour.findByIdAndUpdate(req.params.id)
    result.title.uz = req.body.titleuz
    result.title.ru = req.body.titleru
    result.description.uz = req.body.descriptionuz
    result.description.ru = req.body.descriptionru
    result.save()
    .then(() => {
        res.status(200).json(result)
    })
    .catch((error) => {
        res.status(400).json({message: "Badly", data: error})
    })
}
exports.deleteOne = async (req, res, next) => {
    await Tour.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json([])
}

exports.getItem = async (req, res,next ) => {
    const result = await Tour.findById(req.params.id)
    res.status(200).json(result)
}
exports.getItems = async (req, res,next ) => {
    const result = await Tour.find()
    res.status(200).json(result)
}
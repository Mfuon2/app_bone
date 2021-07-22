import {google} from 'googleapis';
import {cx, googleApiKey, twilioInstance} from "../config";
import MessagingResponse from "twilio/lib/twiml/MessagingResponse";
const sessions = require('express-session');
const customsearch = google.customsearch('v1');

/**
 * @class WhatsappBot
 * @description class will implement bot functionality
 */
    /**
     * @memberof WhatsappBot
     * @param {object} req - Request sent to the route
     * @param {object} res - Response sent from the controller
     * @param {object} next - Error handler
     * @returns {object} - object representing response message
     */
     const googleSearch = async (req: any, res: any, next: any)  => {
        const twiml = twilioInstance;
        const q = req.body.Body;
        const options = {cx, q, auth: googleApiKey};
        console.log('asdsadasdasdasdasdasdasdasdasd   HERE' + JSON.stringify(req.body));
        try {
            // @ts-ignore
            const result = await customsearch.cse.list(options);
            // @ts-ignore
            const firstResult = result.data.items[0];

            let searchData: string | never[] = [];
            const link = firstResult.link;

            if(q=='1'){
                twiml.message(`*Welcome to Sap* \n --------------*-------------\n Scalable Bot for a customized search engine `);
            }else{
                if (result.data.items && result.data.items.length > 0){
                    for (let values of result.data.items) {
                        twiml.message(`${values.snippet}   ${values.link}`);
                    }
                } else {
                    twiml.message(`No Results Found `);
                }
            }
            res.set('Content-Type', 'text/xml');
            return res.status(200).send(twiml.toString());
        } catch (error) {
            return next(error);
        }
    }
     const ussd = async  (req: any, res: any, next: any) => {
         const twilioInstance = new MessagingResponse();
         const session_value = req.session.value;
         console.log(`Incoming message from ${sessions}:`);
         if( session_value === req.body.From){
             twilioInstance.message("Getting your Menu Soon");
         } else{
             req.session.value = req.body.From
             twilioInstance.message("*Hello there 🖐️*  \nMy name is Bot from APA Insurance ltd, Please choose any of the options below to kick start the process\n " +
                 "\n*1. Existing Customer* " +
                 "\n*2. New Customer* " +
                 "\n*3. Talk to customer care*" +
                 "\n*4. Exit*");
         }

         // @ts-ignore
         console.log(`Incoming message from ${req.body.From}: ${JSON.stringify(req.session.body)}`);
        res.set('Content-Type', 'text/xml');
        return res.status(200).send(twilioInstance.toString());
    }



export {
         ussd,
    googleSearch
}

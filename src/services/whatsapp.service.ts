import {google} from 'googleapis';
import twilio from 'twilio';
import {cx, googleApiKey, twilioInstance} from "../config";

const customsearch = google.customsearch('v1');

/**
 * @class WhatsappBot
 * @description class will implement bot functionality
 */

class WhatsappBot {
    /**
     * @memberof WhatsappBot
     * @param {object} req - Request sent to the route
     * @param {object} res - Response sent from the controller
     * @param {object} next - Error handler
     * @returns {object} - object representing response message
     */
    static async googleSearch(req: any, res: any, next: any) {
        const twiml = twilioInstance;
        const q = req.body.Body;
        const options = {cx, q, auth: googleApiKey};

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
}

export default WhatsappBot;

/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5c702c44504243060fbf98b2
*
* You will get 10% discount for each one of your friends
* 
*/

const app = require('../../../app.js');
const db_MyContacts_db = require('../../../db/MyContacts_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Company
 * 
	{
		address: {
			type: 'String'
		},
		mail: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		company: {
			type: Schema.ObjectId,
			ref : "Contact"
		},
		
	}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



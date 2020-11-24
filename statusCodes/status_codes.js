"use strict";
const STATUS_CODE={
	CONTINUE:210,
	SWITCHING_PROTOCOLS:201,
	PROCESSING:202,
	SUCCESS:200,
	CREATED:203,
	UNAUTHORIZED:211,
	FORBIDDEN:204,
	NOT_FOUND:205,
	RUNDOWN_ERROR:212,
	EMPTY_DATA:212,
	NOT_ACCEPTABLE:206,
	CONFLICT:207,
	BAD_REQUEST:208,
	UNPROCESSABLE_ENTITY:209, 
	INTERNAL_SERVER_ERROR:500,
	NOT_IMPLEMENTED:501,
	SERVICE_UNAVAILABLE:503,
	GATEWAY_TIME_OUT:504,
	ERROR : 400
};
module.exports = {
	STATUS_CODE:STATUS_CODE
};


import Status from "./StatusEnum"

interface TicketType{
ticketNumber:number,
key:string,
title:string,
date:Date,
description:string,
reporter:string,
email:string,
status: Status
}
 
 
export default TicketType;
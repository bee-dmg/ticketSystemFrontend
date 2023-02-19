import Status from "./StatusEnum"

interface TicketType{
ticketNumber:number,
key:string,
title:string,
id:number,
date:Date,
description:string,
reporter:string,
email:string,
status: Status
}
 
 
export default TicketType;
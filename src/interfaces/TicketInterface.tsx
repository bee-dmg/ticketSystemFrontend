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
 enum Status{
    OPEN="OPEN",
    READY="READY",
    IN_PROGRESS="IN_PROGRESS",
    CLOSED="CLOSED",
   

 }
 
export default TicketType;
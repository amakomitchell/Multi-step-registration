export interface ITimesheet {
    timesheetId: number; 
    employeeid: string;
    memberId: string;
    affiliateId: string;
    frequency: number;
    siteId: number;
    siteName: string;
    departmentName: string;
    payPeriodEndDate: Date;
    hours: number;
    didWork: boolean;
    timesheetStatus: string;  

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }
  public getClients() {
    return {
      data: [
        {
          clientId : 1,
          clientName : 'Nakul Sharma',
          employementType : 'Salaried',
          companyBusinessName : 'IHS Markit Pvt Ltd',
          monthlyGrossIncome : '172000',
          monthlyNetIncome : '142000',
          numberOfCurrentActiveLoans : 2,
          totalValueOfCurrentActiveLoans : 1500000,
          totalValueOfCurrentMonthlyEmis : 35000,
          numberOfCurrentActiveCreditCards : 0,
        },
        {
          clientId : 2,
          clientName : 'Priyanka Sharma',
          employementType : 'Salaried',
          companyBusinessName : 'Rokwell Autoation Pvt Ltd',
          monthlyGrossIncome : '100000',
          monthlyNetIncome : '90000',
          numberOfCurrentActiveLoans : 1,
          totalValueOfCurrentActiveLoans : 200000,
          totalValueOfCurrentMonthlyEmis : 9000,
          numberOfCurrentActiveCreditCards : 0,
        },
        {
          clientId : 3,
          clientName : 'Nakul Sharma',
          employementType : 'Bussiness',
          companyBusinessName : 'iEnergizer Pvt Ltd',
          monthlyGrossIncome : '172000',
          monthlyNetIncome : '142000',
          numberOfCurrentActiveLoans : 2,
          totalValueOfCurrentActiveLoans : 0,
          totalValueOfCurrentMonthlyEmis : 0,
          numberOfCurrentActiveCreditCards : 0,
        }
      ]
    };
  }
}

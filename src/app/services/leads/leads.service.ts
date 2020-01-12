import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  leads = {
    data: [
      {
        leadId : '1',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Nakul Sharma',
        customerNumber : '9910708092',
        productWanted : 'Personal Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '2',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Priyanka Sharma',
        customerNumber : '9560365442',
        productWanted : 'Home Loan',
        requiredProductValue : 400000,
        employementType : 'Salaried',
        companyBusinessName : 'Rockwell Automation',
        monthlyGrossIncome : '100000',
        monthlyNetIncome : '90000',
        numberOfCurrentActiveLoans : 1,
        totalValueOfCurrentActiveLoans : 0,
        totalValueOfCurrentMonthlyEmis : 0,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '3-Jan-2020',
        currentStatus : 'Verification Pending',
        lastStatusChangeDate : '5-Jan-2020',
        appliedCardName : null,
        loginAmount : 100000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '5-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '3',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Hardik Sharma',
        customerNumber : '9912345678',
        productWanted : 'Auto Loan',
        requiredProductValue : 200000,
        employementType : 'Bussiness',
        companyBusinessName : 'iEnergizer Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '2-Jan-2020',
        currentStatus : 'Document Pending',
        lastStatusChangeDate : '5-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '4-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '4',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Nakul Sharma',
        customerNumber : '9910708092',
        productWanted : 'Personal Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '5',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Nakul Sharma',
        customerNumber : '9910708092',
        productWanted : 'Personal Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '6',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Nakul Sharma',
        customerNumber : '9910708092',
        productWanted : 'Personal Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '7',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Nakul Sharma',
        customerNumber : '9910708092',
        productWanted : 'Home Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Case Logged in',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '8',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Nakul Sharma',
        customerNumber : '9910708092',
        productWanted : 'Personal Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Case Approved',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '9',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Priyanka Sharma',
        customerNumber : '9910708092',
        productWanted : 'Personal Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Case Approved',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '10',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Nakul Sharma',
        customerNumber : '9910708092',
        productWanted : 'Personal Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      },
      {
        leadId : '11',
        teamMemberId : '1',
        teamLeaderId : '2',
        customerName : 'Hardik Sharma',
        customerNumber : '9910708092',
        productWanted : 'Personal Loan',
        requiredProductValue : 200000,
        employementType : 'Salaried',
        companyBusinessName : 'IHS Markit Pvt Ltd',
        monthlyGrossIncome : '172000',
        monthlyNetIncome : '142000',
        numberOfCurrentActiveLoans : 2,
        totalValueOfCurrentActiveLoans : 1500000,
        totalValueOfCurrentMonthlyEmis : 35000,
        numberOfCurrentActiveCreditCards : 0,
        leadCreationDate : '1-Jan-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-Jan-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-Jan-2020',
        sanctionDate : null,
        disbursedDate : null
      }
    ]
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLeads() {
    return this.leads;
  }

  public setLeads(leads) {
    return this.leads = leads;
  }

  public getLeadsByParam(param, value) {
    const returnData = this.leads.data.filter(item => item[param].toLowerCase() == value.toLowerCase());
    this.leads = {data: returnData};
    return {data: returnData};
  }

}

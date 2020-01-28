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
        leadCreationDate : '2020-01-12',
        currentStatus : 'Case Disbursed',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: null,
        leadRemarks: null
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
        leadCreationDate : '3-1-2020',
        currentStatus : 'Verification Pending',
        lastStatusChangeDate : '5-1-2020',
        appliedCardName : null,
        loginAmount : 100000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '5-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents provided documents provided documents provided documents provided documents provided documents|14-1-2020:callback requested by customer|6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents provided documents provided documents provided documents provided documents provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '2-1-2020',
        currentStatus : 'Document Pending',
        lastStatusChangeDate : '5-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '4-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Case Logged in',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Case Approved',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Case Approved',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
      }
    ]
  };

  allLeads = {
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: null,
        leadRemarks: null
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
        leadCreationDate : '3-1-2020',
        currentStatus : 'Verification Pending',
        lastStatusChangeDate : '5-1-2020',
        appliedCardName : null,
        loginAmount : 100000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '5-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents provided documents provided documents provided documents provided documents provided documents|14-1-2020:callback requested by customer|6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '2-1-2020',
        currentStatus : 'Document Pending',
        lastStatusChangeDate : '5-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '4-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Case Logged in',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Case Approved',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Case Approved',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents|14-1-2020:callback requested by customer'
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
        leadCreationDate : '1-1-2020',
        currentStatus : 'Verification Done',
        lastStatusChangeDate : '7-1-2020',
        appliedCardName : null,
        loginAmount : 200000,
        sanctionAmount : 0,
        disbursedAmount : 0,
        loginDate : '6-1-2020',
        sanctionDate : null,
        disbursedDate : null,
        assignedTo: '2',
        assignedToName: 'Priyanka Sharma',
        leadHistory: '6-1-2020:Document Pending|8-1-2020:Case Logged in|10-1-2020:Verification Pending|12-1-2020:Verification Done|14-1-2020:Verification Pending|17-1-2020:Case Approved|20-1-2020:Case Disbursed',
        leadRemarks: '6-1-2020:Customer is busy|8-1-2020:Customer will provide the documents|10-1-2020:Customer not reachable|12-1-2020:provided documents provided documents provided documents provided documents provided documents provided documents|14-1-2020:callback requested by customer'
      }
    ]
  };

  currentLead = null;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLeads() {
    return this.allLeads;
  }

  public getLead(id) {
    return this.allLeads.data.filter(item => item.leadId === id);
  }

  public setLeads(leads) {
    return this.leads = leads;
  }

  public getCurrentLead() {
    return this.currentLead;
  }

  public setCurrentLead(lead) {
    this.currentLead = lead;
  }

  public getLeadsByParam(param, value) {
    const returnData = this.leads.data.filter(item => item[param].toLowerCase() == value.toLowerCase());
    this.leads = {data: returnData};
    return {data: returnData};
  }

  public getLeadsByAllParams(params) {
    const filters = {
      filterProduct: 'productWanted',
      filterCustomerName: 'customerName',
      filterCustomerMobile: 'customerNumber',
      filterCustomerDate: 'leadCreationDate',
      filterStatus: 'currentStatus',
    };

    let returnData = this.leads.data;
    let filteredParams = {};
    if (params.filterProduct.length > 0) {
      filteredParams['filterProduct'] = params.filterProduct;
    }
    if (params.filterCustomerName.length > 0) {
      filteredParams['filterCustomerName'] = params.filterCustomerName;
    }
    if (params.filterCustomerMobile.length > 0) {
      filteredParams['filterCustomerMobile'] = params.filterCustomerMobile;
    }
    if (params.filterCustomerDate.length > 0) {
      filteredParams['filterCustomerDate'] = params.filterCustomerDate;
    }
    if (params.filterStatus.length > 0) {
      filteredParams['filterStatus'] = params.filterStatus;
    }

    // tslint:disable-next-line: forin
    for (const key in filteredParams) {
      console.log('filteredParams => ', key, filteredParams[key]);
      returnData = returnData.filter(item => item[filters[key]].toLowerCase() == filteredParams[key].toLowerCase());
    }
    this.leads = {data: returnData};
    return {data: returnData};
  }

  getFilteredLeads(filter) {

    const returnLeads = [];
    this.getLeads().data.forEach(item => {
      if (item['productWanted'].toLowerCase().indexOf(filter['filterProduct'].toLowerCase()) > -1
      && item['customerName'].toLowerCase().indexOf(filter['filterCustomerName'].toLowerCase()) > -1
      && item['customerNumber'].toLowerCase().indexOf(filter['filterCustomerMobile'].toLowerCase()) > -1
      && item['leadCreationDate'].toLowerCase().indexOf(filter['filterCustomerDate'].toLowerCase()) > -1
      && item['currentStatus'].toLowerCase().indexOf(filter['filterStatus'].toLowerCase()) > -1) {
        returnLeads.push(item);
      }
    });
    return {data: returnLeads};
  }

  assignLead(leadId, assignee, userId) {
    this.allLeads.data.forEach(item => {
      if (item.leadId === leadId) {
        item.assignedToName = assignee;
        item.assignedTo = userId;
        item.leadHistory = item.leadHistory + '|' + this.appendLeadhistory(assignee, userId);
      }
    });
    this.leads.data.forEach(item => {
      if (item.leadId === leadId) {
        item.assignedToName = assignee;
        item.assignedTo = userId;
        item.leadHistory = item.leadHistory + '|' + this.appendLeadhistory(assignee, userId);
      }
    });
  }

  addRemark(leadId, remark) {
    console.log('27Jan leadId, remark => ', leadId, remark);
    this.allLeads.data.forEach(item => {
      if (item.leadId == leadId) {
        item.leadRemarks = item.leadRemarks + '|' + this.appendLeadRemark(remark);
      }
    });
    this.leads.data.forEach(item => {
      if (item.leadId == leadId) {
        item.leadRemarks = item.leadRemarks + '|' + this.appendLeadRemark(remark);
      }
    });
    console.log('27Jan this.allLeads this.leads => ', this.allLeads, this.leads);
  }

  getLeadRemarks(id) {
    const leadObj = this.allLeads.data.filter(item => item.leadId == id);
    return leadObj[0]['leadRemarks'];
  }

  private getFormatedDate() {
    const dateObj = new Date();
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return date + '-' + month + '-' + year;
  }

  private appendLeadhistory(assignee, userId) {
    return this.getFormatedDate() + ':' + 'Assigned to ' + assignee + ' (' + userId + ')';
  }

  private appendLeadRemark(remark) {
    return this.getFormatedDate() + ':' + remark;
  }

}

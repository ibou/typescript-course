"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformations() {
        console.log(this.employees.length, this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'ITSS');
        this.admins = admins;
    }
    describe() {
        console.log("ITDepartmentsss... : ");
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accountings');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log("AccountingDepartment... ::: ");
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("SW : any rapport added");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("SW : Peaze, set a valid value");
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log("Reports ...", this.reports);
        console.log("Most recent report ...", this.lastReport);
    }
}
const it = new ITDepartment("dIt", ["KLM"]);
it.name = "New name";
it.describe();
it.addEmployee("Ibrahima Diallo");
it.addEmployee("Manu");
it.printEmployeesInformations();
console.log('***************************');
const accounting = AccountingDepartment.getInstance();
console.log('***************************', accounting);
accounting.mostRecentReport = "My recent raport";
accounting.mostRecentReport;
accounting.addEmployee("Maxwell D");
accounting.printEmployeesInformations();
accounting.addReport("Third report");
accounting.describe();
accounting.printReports();

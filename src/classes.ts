abstract class Department {
    static fiscalYear = 2020;

    private employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeesInformations() {
        console.log(this.employees.length, this.employees);

    }

    abstract describe(this: Department): void
}
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'ITSS');
        this.admins = admins
    }
    describe(this: Department) {
        console.log("ITDepartmentsss... : "  );
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;
    private static instance: AccountingDepartment;


    private constructor(id: string, private reports: string[]) {
        super(id, 'Accountings');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(this: Department) {
        console.log("AccountingDepartment... ::: " );
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("SW : any rapport added");
    }
    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("SW : Peaze, set a valid value");
        }
        this.addReport(value);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log("Reports ...", this.reports);
        console.log("Most recent report ...", this.lastReport);
    }
}


const it = new ITDepartment("dIt", ["KLM"]);
it.name = "New name"
it.describe();

it.addEmployee("Ibrahima Diallo");
it.addEmployee("Manu");
it.printEmployeesInformations();

console.log('***************************');

// const accounting = new AccountingDepartment("dAccounting", ["Un ra"]);
const accounting = AccountingDepartment.getInstance();
console.log('***************************', accounting);
accounting.mostRecentReport = "My recent raport";
accounting.mostRecentReport;
accounting.addEmployee("Maxwell D");
accounting.printEmployeesInformations();
accounting.addReport("Third report");
accounting.describe();
accounting.printReports();


// // Copyright (c) 2016, Firsterp and contributors
// // For license information, please see license.txt
// /* eslint-disable */

frappe.query_reports["Estimated Job Report Detailed"] = {
	"filters": [
		{
			"fieldname":"Company",
			"label": __("To"),
			"fieldtype": "Link",
			"options": "Company",
			"default": frappe.defaults.get_user_default("Company"),
			"reqd": 1
		},
		{
			"fieldname":"from_date",
			"label": __("From"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"to_date",
			"label": __("To"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"branch",
			"label": __("Branch"),
			"fieldtype": "Link",
			"options": "Branch"
		},
		{
			"fieldname":"job_type",
			"label": __("Job type"),
			"fieldtype": "Link",
			"options": "Job Type"
		},
		{
			"fieldname":"operations",
			"label": __("Operations"),
			"fieldtype": "Link",
			"options": "Operations"
		}
	]
};

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ About Project ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Create a Single Page Sales entry front-end using ReactJS etc. It should have  two sections, one for the header_table and the other for the detail_table, you can follow the steps below:
Design the user interface for the entry screen, dividing it into two sections.
First section "HEADER" which display the necessary fields from the header_table. 
The second section "DETAIL" which allow entry for multiple rows in the detail_table. This section will include fields for items, quantities, prices, and any other relevant details.
Implement functionality to dynamically add or remove rows in the detail_table section to accommodate the entry of multiple rows.
Validate the input data, ensuring that all required fields are filled and that the data entered is in the correct format.
On submission of the form, save the data entered into the appropriate tables in our database, with the header information saved in the header_table and the "DETAIL" information saved in the detail_table.
Also make a printable version of the saved Voucher.

	header_table	http://5.189.180.8:8010/header		
	detail_table	http://5.189.180.8:8010/detail		
	item_master	http://5.189.180.8:8010/item		
	Insert data to heaer_table & detail_table POST method	http://5.189.180.8:8010/header/multiple		
	
 Data Format for POST method	"{""header_table"" : 
        {""vr_no"": 5,
        ""vr_date"": ""2023-01-01"",
        ""ac_name"": ""UNPLUGAPPS"",
        ""ac_amt"": 40,
        ""status"": ""A""    },

""detail_table"": [
    {
        ""vr_no"": 5,
        ""sr_no"": 1,
        ""item_code"": ""ITEM 111"",
        ""item_name"": ""ITEM NAME 111"",
        ""description"": ""This Item ITEM ITEM ITEM.............."",
        ""qty"": 4,
        ""rate"": 5
    },
    {
        ""vr_no"": 5,
        ""sr_no"": 2,
        ""item_code"": ""ITEM 2"",
        ""item_name"": ""ITEM NAME 2"",
        ""description"": ""ITEM ITEM ITEM.............."",
        ""qty"": 2,
        ""rate"": 10
    }
  ]
}"		
				
				
Table Design				
	Tables Name	Column Name	Data Type	Description
	header_table	vr_no	numeric(18)	Primery Key
1		vr_date	datetime	Today's date
		ac_name	varchar(200)	user entry
		ac_amt	Numeric(18,2)	Sum of detail_table qty * rate
		status	char(1)	DropdownList Values(A = Active , I = Inactive)
				
2	detail_table	vr_no	numeric(18)	Primery Key
		sr_no	numeric(18)	Primery Key
		item_code	varchar(20)	From item_master table
		item_name	varchar(200)	From item_master table
		description	varchar(3000)	user entry
		qty	Numeric(18,3)	user entry
		rate	Numeric(18,2)	user entry
				
3	item_master	item_code	varchar(20)	
		item_name	varchar(200)	

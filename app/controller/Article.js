Ext.define('RT.controller.Article', {
	extend: 'Ext.app.Controller',

	config: {

		refs: {
			list: 'articles',
		},

		control: {
			"articleslist": {
				disclose: 'printArticle'
			},
		}

	}, // config

	printArticle: function(list, record){
		console.log('Printing Article: ' + record.getData().title);

		/*$url = 'http://178.79.128.76/revivaltimes/app/sections/contentlist/' + record.getData().tid;
		Ext.getStore('Articles').getProxy().setUrl($url);
		Ext.getStore('Articles').load();*/

		this.getList().push({
			xtype: 'articledetails',
			title: record.getData().title,
			data: record.getData(),
		});

	},

});
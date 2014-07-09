Ext.define('RT.controller.Sections', {
	extend: 'Ext.app.Controller',

	config: {

		refs: {
			sections: 'sections'
		},

		control: {
			"sectionslist": {
				disclose: 'listArticles'
			},
		}

	}, // config

	listArticles: function(list, record){
		console.log('Listing Articles: ' + record.getData().tid);

		$url = 'http://178.79.128.76/revivaltimes/app/sections/contentlist/' + record.getData().tid;
		Ext.getStore('Articles').getProxy().setUrl($url);
		Ext.getStore('Articles').load();

		this.getSections().push({
			xtype: 'articles',
			title: record.getData().title,
			data: record.getData(),
		});

	},

});
Ext.define('RT.controller.MessagesItemTap', {
	extend: 'Ext.app.Controller',

	config: {

		refs: {
			messages: 'messages'
		},

		control: {
			"messageslist": {
				disclose: 'showMessage'
			},
		}
			
	}, // config

	showMessage: function(list, record){
		this.getMessages().push({
			xtype: 'messagedetails',
			title: record.getData().title + ' by ' + record.teacher(),
			data: record.getData(),
		});
	},

});
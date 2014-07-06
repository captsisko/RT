Ext.define('RT.view.Content.Messages', {
	// extend: 'Ext.tab.Panel',
	extend: 'Ext.navigation.View',
	// extend: 'Ext.List',
	xtype: 'messages',

	require: [
		// 'RT.view.Content.MessagesList',
		// 'RT.view.Content.MessageDetails',
	],

	config: {
                title: 'Messages',
                iconCls: 'user',

                // navigationBar: false,

                /**********
                 * navigation menu
                 * comes from messagesList
                 **********/
                items: [
                	{
                		xtype: 'messageslist',
                	}
                ]
	}

});
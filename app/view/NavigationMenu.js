Ext.define('RT.view.NavigationMenu', {
	extend: 'Ext.List',
	xtype: 'navmenu',

	config: {
		cls: 'nav-list',
		itemTpl: '{title}',
		data: [
			{
				title: 'Test#1'
			},
			{
				title: 'Test#2'
			}
		]
	}
});
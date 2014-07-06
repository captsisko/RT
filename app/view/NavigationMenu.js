Ext.define('RT.view.NavigationMenu', {
	extend: 'Ext.List',
	xtype: 'navlist',

	config: {
		cls: 'nav-list',
		itemTpl: '{title}',
		data: [
			{
				title: 'Home'
			},
			{
				title: 'Messages'
			},
			{
				title: 'Sections'
			}
		]
	}
});
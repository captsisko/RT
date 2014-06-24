Ext.define('RT.view.Viewport', {
	extend: 'Ext.Container',
	xtype: 'viewport',
	
	requires: [
		'Ext.TitleBar'
	],

	config: {
		fullscreen: true,
		layout: 'hbox',

		items: [
			{
				xtype: 'navlist',
				width: 250,
                            flex: 1,
			},
			{
				xtype: 'main',
				cls: 'slide',
				width: '100%',
				html: 'Slide Testing ...',
                            flex: 2,
            }
		]
	}
});
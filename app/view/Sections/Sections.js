Ext.define('RT.view.Sections.Sections', {
	extend: 'Ext.navigation.View',
	xtype: 'sections',

	config: {
                title: 'Sections',
                iconCls: 'user',


                /**********
                 * navigation menu
                 * comes from sectionsList
                 **********/
                items: {
        	       xtype: 'sectionslist',
        	}
	}

});
Ext.define('RT.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'Ext.TitleBar',
        // 'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Revival Times',

                    items: [
                        {
                            name: 'BTNslidenav',
                            iconMask: true,
                            iconCls: 'list',
                            ui: 'plain',
                        },
                        {
                            iconMask: true,
                            iconCls: 'user',
                            ui: 'plain',
                            align: 'right'
                        }
                    ]
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                xtype: 'messages'
            },
            {
                xtype: 'sections'
            },
            /*{
                xtype: 'articles'
            },*/
            /*{
                xtype: 'articledetails'
            }*/
        ]
    }
});

Ext.define('RT.view.Sections.ArticleDetails', {
    extend: 'Ext.Panel',
    xtype: 'articledetails',

    config: {
        styleHtmlContent: true,
        scrollable: 'vertical',
            // xtype: 'video',
        title: 'Article Details',
        tpl: [
            '<table>',
                '<tr>',
                    '<td>{title}</td>',
                '</tr>',
                '<tr>',
                    '<td>NID: {nid}</td>',
                '</tr>',
                '<tr> <td> ICON1: <img src={image1}/> </td> </tr>',
                '<tr> <td> {section1} </td> </tr>',

                '<tr> <td> ICON2: <img src={image2}/> </td> </tr>',
                '<tr> <td> {section2} </td> </tr>',

                '<tr> <td> ICON3: <img src={image3}/> </td> </tr>',
                '<tr> <td> {section3} </td> </tr>',

            '</table>',
        ],

    }

});
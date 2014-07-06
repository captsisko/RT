Ext.define('RT.view.Content.MessageDetails', {
    extend: 'Ext.Panel',
    xtype: 'messagedetails',

    config: {
        // styleHtmlContent: true,
        // scrollable: 'vertical',
            // xtype: 'video',
        title: 'MessageDetails',
        tpl: [
            /*'NID:  {nid}<br>',
            '<h2>title: {title}<br></h2>',
            'Synopsis: {description}<br>',
            'Date: {Date}<br>',
            'Service time: {Time}<br>',
            'Teacher: {Author}<br>',
            'GUID: {guid}<br>',
            '<a href={guid}>Listen</a>',
            '<audio controls>
              <source src=horse.ogg type=audio/ogg>
              <source src={guid} type=audio/mpeg>
              Your browser does not support the audio tag.
            </audio>'*/
            "<h3><b>Title</b>: <i>{title}</i></h3><br>",
            "<b>Teacher</b>:<pre>{Author}<br>",
            "<b>Synopsis</b>:<br>{description}<br>",
            "<b>Date</b>:<br>{Date}<br>",
            "<b>Time</b>:<br>{Time}<br>",
            "<audio controls><source src='horse.ogg' type='audio/ogg'><source src='{guid}' type='audio/mpeg'>Your device does not support the audio tag.</audio>",
            
        ],

    }

});
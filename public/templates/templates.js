define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplateMixin',
    'dojo/text!./views/templates/SomeWidget.html'
], function(declare, _WidgetBase, _TemplatedMixin, template) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template
    });
});

/**
 * - All variable substitution are just attributes on the widget, and can be accessed via dot notation if needed
 * - attach point data attribute in html: tells template renderer when a DOM element is created with this attribute
 *      set the value o that attribute as a property of yoru widget to be referenced in the DOM element creatd
 *      ex: in the SomeWidget.html a titleNode variable will be created to be referenced in code
 */
// app/controller/application.js
import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      src: '/assets/images/red/web-ready_OA-2017_Readers_Engaging the Sustained Argument.jpg',
      w: 1296,
      h: 2160,
    },
    {
      src: '/assets/images/red/web-ready_OA-2017_Readers_Reducing Barriers to Access.jpg',
      w: 1296,
      h: 2160,
    },
    {
      src: '/assets/images/red/web-ready_OA-2017_Readers_Sharing and Using.jpg',
      w: 1296,
      h: 2160,
    },
  ],

  black: [
    {
      src: '/assets/images/black/web-ready_OA-2017_Immediate and Free.jpg',
      w: 1296,
      h: 2160,
    },
    {
      src: '/assets/images/black/web-ready_OA-2017_New Possibilities of Digital Environments.jpg',
      w: 1296,
      h: 2160,
    },
  ],

  orange: [
    {
      src: '/assets/images/orange/web-ready_OA-2017_Authors_Engaging the Humanities.jpg',
      w: 1296,
      h: 2160,
    },
    {
      src: '/assets/images/orange/web-ready_OA-2017_Authors_Reducing Market Barriers.jpg',
      w: 1296,
      h: 2160,
    },
    {
      src: '/assets/images/orange/web-ready_OA-2017_Authors_Widening Potential Readership.jpg',
      w: 1296,
      h: 2160,
    },
  ],

});

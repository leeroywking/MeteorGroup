import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
import Counter from '/imports/api/counter'


function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

function updateCounter(count){
  Counter.insert({count: count});
}

// links.insert({"title":"Cool Link","url":"http://coolsite.com","createdAt":"Sat Oct 19 2019 10:41:45 GMT-0700 (Pacific Daylight Time)"})

Meteor.startup(() => {
  // If the Links collection is empty, add some data.

  if (Counter.find().count() === 0 ){
    updateCounter(0)
  }
});

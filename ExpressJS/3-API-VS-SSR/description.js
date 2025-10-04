/**
 * 🔹 API: Application Programming Interface
 *    It’s essentially a set of rules and tools that lets different software applications talk or communicates to each other.
 *
 * In Express, in most cases you'll use one of the two following options:
 *      • You'll use it to set up API
 *      • OR Templates with Server Side Rendering
 * API is the most overused terms in the community and in various scenario it can mean different things
 *
 * 🔹 When we talk about API, we mean setting up an HTTP interface to interact with our data. Now data is sent using JSON (JavaScript Object Notation).
 *    And in order to sent back our response, we're using to res.JSON() method which will do all the heavy lifting.
 *
 * 🔹 The other flavour we have is Server Side Rendering where we will setup templates and send back entire HTML and CSS in JavaScript ourselves.
 *    And we are going to do that using Res.render method.
 *
 *        API                       SSR
 *  • API - JSON              • SSR - TEMPLATE
 *  • SEND DATA               • SEND TEMPLATE
 *  • RES.JSON()              • RES.RENDER()
 *
 * ■ Main idea with APIs is that our server provides data.
 * ■ And that means, if any frontend app that wants to access it and use it, can simply perform a HTTP Request and using our data setup the API and functionality.
 */

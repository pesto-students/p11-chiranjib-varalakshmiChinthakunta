# What is the maximum amount of data that can be stored in localstorage,and what are the implications of this limit for web applications?

LocalStorage is a data storage type of web storage. This allows the JavaScript sites and apps to store and access the data without any expiration date.
 According to the HTML5 spec,Local Storage has 5MB per webapplication this limit can be increased by the user when needed;
however, only a few browsers support this.

One Local Storage per web application, with a max size of 5MB, is available for a given browser and is shared by all windows and tabs of that browser.

If you run myApp in multiple tabs and windows, they all share the same LocalStorage data , subject to a max limit of 5MB. 
If you were to then open that same application in another browser, say FireFox, then the new browser would get its own Local Storage to share with all its own tabs and windows.

# How does session storage differ from localstorage, and in what scenarios would you want to use one over the other
HTML5 Web Storage defines two types of key-value storage types: sessionStorage and localStorage. The primary behavioral difference is how long the values persist and how they are shared. The following table shows the differences between the two types of storage
|Storage Type	| Max Size | Persistence | Availability to other Windows/tabs	Data Type Supported |
|-------------|----------|-------------|--------------------------------------------------------|
|LocalStorage |	5MB per app per browser| According to the HTML5 spec, this limit can be increased by the user when needed; however, only a few browsers support this	On disk until deleted by user (delete cache) or by the app	Shared across every window and tab of one browser running same web app	String only, as key-value pairs
|SessionStorage |Limited only by system memory|	Survives only as long as its originating window or tab	Accessible only within the window or tab that created it	String only, as key-value pairs

LocalStorage has max size of 5MB per app per browser,

…But this can be changed. If we’d like to allow subdomains like forum.site.com to get a cookie set at site.com, that’s possible.

For that to happen, when setting a cookie at site.com, we should explicitly set the domain option to the root domain: domain=site.com. Then all subdomains will see such cookie.

For example:

// at site.com
// make the cookie accessible on any subdomain *.site.com:
document.cookie = "user=John; domain=site.com"

// later

// at forum.site.com
alert(document.cookie); // has cookie user=John

# Waldbeere

Waldbeere is a tiny JavaScript to run AB and Multivariate Split Tests.

Waldbeere is less than 1 KB when gzip compressed and integrates seamlessly with Google Analytics. Contrary to other AB and Multivariate test tools, Waldeere does not slow down your website -- there are no extra DNS or HTTP requests when using Waldbeere.

## Advantages

* Supports both AB and Multivariate tests.
* Unlimited number of users.
* Does not slow down your website.
* Can run tests with or without control.
* Free.

## Disadvantages

* No GUI.
* No data analysis.

## How to use Waldbeere

1. Set up goals in Google Analytics.
2. [Get the script](waldbeere.min.js) and add it before the end of your page's &lt;head&gt;.
3. Set up your tests.
4. Send the Waldbeere.customVar property to Google Analytics as a custom variable or custom dimension.
5. Watch the data pour in.
6. ???
7. Feel like a marketing guru and PROFIT.

### 1. Setting up Goals

Before using Waldbeere, you need to have goals set up in Google Analytics that you want to optimize the conversion rate of. How to is a bit outside the scope of this README.md, but some things you can set up as goals are

* "Thank you" pages shown after placing an order
* Subscribing to an email newsletter
* Interacting with a video
* Donating to a website

### 2. Adding Waldbeere to Your Pages

Copy & paste this stub before the end of your page's &lt;head&gt;.

```HTML
<head>
<title>...</title>
```

```HTML
<script>
(function(r,l){try{var t=function(a,w){return s(a)+":"+s(w)},s=function(a){n.lastIndex=0;return n.test(a)?'"'+a.replace(n,function(a){var b=x[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'},u=function(a,c,b){var e,d;if("undefined"!=typeof c){b=b||{};null===c&&(c="");e=b.path;if(b=b.expires)d=new Date,d.setTime(d.getTime()+864E5*b),d="; expires="+d.toUTCString();document.cookie=[a,"=",encodeURIComponent(c),e?"; path="+e:"",d||""].join("")}else if(e=
document.cookie)if(b=e.indexOf(a+"="),-1<b)return d=e.indexOf(";",b),decodeURIComponent(e.substring(b+a.length+1,0>d?e.length:d))},n=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,x={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},g=r[l]=r[l]||{},c,h={},m=[],a,f,k,p,q,v=function(){c=g.tests;if(a=u(l))for(a in q=eval("({"+a+"})"),q)f=q[a],!c[a]||!c[a][f]&&f||(h[a]=c[a][f]||"",m.push(t(a,f)));for(a in c)if(!h[a]&&
""!==h[a]){k=[];for(f in c[a])k.push(f);p=!g.config.noDefault&&1>Math.random()*(k.length+1)?"":k[Math.floor(Math.random()*k.length)];h[a]=c[a][p];m.push(t(a,p))}m.sort();g.customVar=m.join(",");u(l,g.customVar,g.config)};g.section=function(a){v();v=eval;h[a]&&document.write(h[a]+"<noscript>")}}catch(y){}})(window,"Waldbeere");
</script>
<script>
Waldbeere = window.Waldbeere || {};
Waldbeere.config = Waldbeere.config || {};
Waldbeere.config.expires = 30;
Waldbeere.config.path = '/';
Waldbeere.tests = {
};
</script>
```

```HTML
</head>
<body>
```

### 3. Setting up Your Tests

The basis for a Waldbeere test is a section, which is something on the page that you want to modify. You can modify

* text
* HTML
* CSS

A section may have a default that your tests will compare against. This is called a control.

If you only use one section, you are running an AB(CD...) test, if you use multiple sections, you are running a multivariate test.

#### Creating a Text Section

Use this if you want to test different texts, for example on a button.

```javascript
Waldbeere.tests = {
    'buttontext': {
        'funksoul': 'Check it out now',
        '30 % off': '30 % off today!'
    }
};
```

The original text on the button was:

```HTML
<button>Click here</button>
```

With the Waldbeere split test:

```HTML
<button><script>try{Waldbeere.section('buttontext');}catch(e){}</script>Click here</noscript></button>
```

When Waldbeere is run by the browser, the text on the button may be replaced by "Check it out now" or "30 % off today!" In 33 % of all visits, "Click here" (the control) will be shown.

#### Creating an HTML section

With Waldbeere, you can AB test entire parts of your page to optimize your conversion rates.

```javascript
Waldbeere.tests = {
    'addtocart': {
        'free shipping': '<button>Add to cart<\/button><br><small>Shipping is free<\/small>',
        'cart image': '<button><img src="cart.png"> Add to cart<\/button>'
    }
};
```

```HTML
<script>try{Waldbeere.section('addtocart');}catch(e){}</script>
<button>Add to cart</button>
</noscript>
```

#### Creating a CSS Section

Manipulating CSS is very effective because it allows to you make large, site-wide changes and see how your conversion rates change in response. Don't be afraid to test seemingly irrelevant things like background colours, link colours, font sizes or spacing between elements.

In this example, we're creating a multivariate test with 9 variations.

```javascript
Waldbeere.tests = {
    'font-size': {
        '13': '<style>html,body { font-size: 13px }<\/style>',
        '11': '<style>html,body { font-size: 11px }<\/style>'
    },
    'a': {
       '00f': '<style>a { color: #00f }<\/style>',
       '08c': '<style>a { color: #08c }<\/style>'
   }
};
```

Before the end of your page's &lt;head&gt;:

```HTML
<script>try{Waldbeere.section('font-size');}catch(e){}</script></noscript>
<script>try{Waldbeere.section('a');}catch(e){}</script></noscript>
```

When the page is loaded, you may see 11 or 13 px body text and different link colours.

### 4. Sending Data to Google Analytics

After setting up Waldbeere and your creatings tests, you need to get the variation that's chosen by Waldbeere into Google Analytics. There, the combinations will show up in the Custom Variables or Custom Dimension reports. 

If you use ga.js with the old syntax:

```javascript
// var tracker = _gat._createTracker("UA-......-..","t")
if (window.Waldbeere && window.Waldbeere.customVar) {
    tracker._setCustomVar(1, 'Waldbeere', Waldbeere.customVar, 2);
}
// tracker._trackPageview();
```

If you use ga.js with the asynchronous syntax:

```javascript
_gaq.push(
    ['_setAccount', 'UA-......-..'],
    ['_setCustomVar', 1, window.Waldbeere && window.Waldbeere.customVar ? 'Waldbeere' : null, window.Waldbeere && window.Waldbeere.customVar ? window.Waldbeere.customVar : null, 2 ],
    ['_trackPageview']
);
```

If you use analytics.js:

```javascript
ga('create', 'UA-......-..');
if (window.Waldbeere && window.Waldbeere.customVar) {
    ga('set', 'dimension1', Waldbeere.customVar);
}
ga('send', 'pageview');
```

### 5. Reporting in Google Analytics

In Google Analytics, go to the Audience &raquo; Custom &raquo; Custom Variables report. Next, select the Waldbeere custom variable key in slot 1.

<img src="doc/ga-custom-variables-728.png" alt="Custom Variables Report in Google Analytics">

## Q & A

### How do I see all variations?

Delete your Waldbeere cookie and reload your page (a better method may come some day).

### What other constraints are there?

Keep your section names and variations short.

### How long will my test run?

1. Calculate the number of variations -- multiply the number of each section's variations (plus one if using control) together.
2. [Go here](https://vwo.com/ab-split-test-duration/) and enter your current conversion rate, the number of variations and the average number of daily visitors.
3. Click "Calculate Test Duration."

### I want to split test two totally different designs of a page, how do I do this?

Put both designs on the same page, wrapped in &lt;div&gt;s. Then, simply toogle the CSS display property of both designs.

```javascript
Waldbeere.tests = {
    'designs': {
        '2': '<style>#design1 { display: none } #design2 { display: block !important }<\/style>'
   }
};
```

```HTML
<div id="design1">
 <h1>Welcome</h1>
 <p>Bla</p>
</div>

<div id="design2" style="display: none">
 <h1>Hey there</h1>
 <p><img src="foo.jpg"></p>
</div>
```

## About

### Why this script?

[I](http://johannburkard.de) used and liked Google Website Optimizer a lot. When Google closed it, I wrote Waldbeere because I couldn't afford any of the popular split testing tools.

### Where does the name come from?

[This](http://www.adelholzener.de/eistee/#product-1499) (though it contains [high-fructose corn syrup](https://www.youtube.com/watch?v=dBnniua6-oM) so beware).
# Waldbeere

Waldbeere is a tiny JavaScript to run AB and Multivariate split tests.

Waldbeere is less than 1 KB large when gzip compressed and integrates with Google Analytics. Contrary to other AB and Multivariate test tools, Waldeere does not slow down your page -- there are no extra DNS or HTTP requests when using Waldbeere.

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

1. [Get the script](waldbeere.min.js) and add it at the end of your page's &lt;head&gt;.
2. Set up your tests.
3. Set up your goals in Google Analytics.
4. Send the Waldbeere.customVar property to Google Analytics as a custom variable (properties using ga.js) or custom dimension (properties using Universal Analytics/analytics.js).
5. Watch the data pour in.
6. ???
7. Feel like a marketing guru and PROFIT.


### 4. Sending data to Google Analytics

If you use ga.js with the old synchronous syntax:

```javascript
// var tracker = _gat._createTracker("UA-......-..","t")

window.Waldbeere && window.Waldbeere.customVar && tracker._setCustomVar(1, 'Waldbeere', Waldbeere.customVar, 2);
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

## About

### Why this script?

[I](http://johannburkard.de) used and liked Google Website Optimizer a lot. When Google closed it, I wrote Waldbeere because I couldn't afford any of the popular split testing tools.

### Where does the name come from?

[This](http://www.adelholzener.de/eistee/#product-1499) (though it contains [high-fructose corn syrup](https://www.youtube.com/watch?v=dBnniua6-oM) so beware).
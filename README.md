loopless
========

Encapsulated .loop function in LESS

Load
----

    bower --save-dev install loopless

Extend .loop-mix-in
-------------------

    .loop-mix-in(@selector, @index, @from, @to) when(@selector = '#kraftwerk') {
      content: '@{index}';
      z-index: (@to - @from) - (@to - @index);
    }

Loop it
-------

    .loop(1970, 1980, '#kraftwerk', '.model-');
    

Rewind
------

    #kraftwerk.model-1970 {
      content: '1970';
      z-index: 0;
    }
    #kraftwerk.model-1971 {
      content: '1971';
      z-index: 1;
    }
    ...

Ups
---

There are two helpful examples that feed into this solution.

- https://gist.github.com/edwinwebb/5155504
- http://snipplr.com/view/70819/less-loop-to-generate-classes/


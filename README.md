loopless
========

Encapsulated .loop function in LESS

Extend .loop-mix-in
-------------------

    .loop-mix-in(@selector, @index, @from, @to) when(@selector = '#kraftwerk') {
      content: '@{index}';
      z-index: (@to - @from) - (@to - @index);
    }

Loop it
-------

    .loop(1970, 1980, '#kraftwerk', '.model-');
    

Playback
--------

    #kraftwerk.model-1970 {
      content: '1970';
      z-index: 0;
    }
    #kraftwerk.model-1971 {
      content: '1971';
      z-index: 1;
    }
    ...

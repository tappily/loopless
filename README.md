&#426;oop.&#426;ess
===================

Encapsulated .loop function in LESS

Load
----
```shell
    bower --save install loopless
```
Make a mix
----------
```css
    .loop-in(@selector, @index, @from, @to) when(@selector = '.fader') {
      &--level-@{index} {
        content: '@{index}';
        volume: (@index - @from);
      }
    }
```
Loop in selector
----------------
```css
    .loop(in, '.fader', 50, 100);
```   

Rewind
------
```css
    .fader--level-0 {
      content: '50';
      volume: 0;
    }
    .fader--level-1 {
      content: '51';
      volume: 1;
    }
    ...
```
Get over
--------
```css
    .loop-over(@selector, @index, @from, @to) when(@selector = '.fader') {
      &--level-@{index} {
        ...
      }
    }

    .fader {
      .loop(over, '.fader', 0, 50);
    }
```

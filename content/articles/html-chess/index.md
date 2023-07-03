---
title: 'HTML Chess'
description: 'An html file that can beat you at chess (probably...)'
date: '2021-04-03'
banner:
    src: '../../images/html_chess_logo_big.png'
    alt: 'HTML Chess Logo'
    caption: 'HTML Chess Logo'
categories:
    - 'Project'
keywords:
    - 'HTML'
    - 'Webdev'
    - 'Chess'
    - 'Stockfish'
---

# htmlchess
An html file that can beat you at chess (probably...)

The html file can be opened and run using almost any browser.
(mobile is not supported yet)

Tested on:
- Edge
- Chrome

[Begin your battle](https://www.davidryan.info/htmlchess.html)

### Functionality includes: 
- Play as white or black
- Integrated stockfish AI
    - Choose stockfish search depth or search time to adjust difficulty
- Set starting position using an FEN string or by dragging and dropping pieces
- Export completed games in UGN notation or current positions to FEN notation
- Take back and advance moves

### Other files
- htmlchesslines
    - shows a customizable number of "best" lines that are calculated infinitely until a new position is provided
- htmlchesshelper
    - a simple chess training tool that will give you suggestions and hints as you play a game with take backs

### Libraries used:
- [stockfish.js](https://github.com/nmrugg/stockfish.js)
    - a clone of the stockfish library in js
    - C++ Stockfish [library](https://github.com/official-stockfish/Stockfish)
- [chess.js](https://github.com/jhlywa/chess.js)
    - Javascript chess library that is used for chess move generation/validation, piece placement/movement, and check/checkmate/stalemate detection
- [chessboard.js](https://github.com/oakmac/chessboardjs/)
    - chessboard.js is a standalone JavaScript Chess Board
- [jquery.js](https://github.com/jquery/jquery)

CDN service provided by [jsdeliver](https://www.jsdelivr.com/) & [Google](https://developers.google.com/speed/libraries)

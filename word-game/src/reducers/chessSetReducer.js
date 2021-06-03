const initialState = {
    pieces: {
        WR1: {col: 1, row: 1, color: 'white', captured: false, type: 'rook', pieceImage: 'R'},
        WKn1: {col: 2, row: 1, color: 'white', captured: false, type: 'knight', pieceImage: 'Kn'},
        WB1: {col: 3, row: 1, color: 'white', captured: false, type: 'bishop', pieceImage: 'B'},
        WK: {col: 4, row: 1, color: 'white', captured: false, type: 'king', pieceImage: 'K'},
        WQ: {col: 5, row: 1, color: 'white', captured: false, type: 'queen', pieceImage: 'Q'},
        WB2: {col: 6, row: 1, color: 'white', captured: false, type: 'bishop', pieceImage: 'B'},
        WKn2: {col: 7, row: 1, color: 'white', captured: false, type: 'knight', pieceImage: 'Kn'},
        WR2: {col: 8, row: 1, color: 'white', captured: false, type: 'rook', pieceImage: 'R'},
        WP1: {col: 1, row: 2, color: 'white', captured: false, type: 'pawn', pieceImage: 'P'},
        WP2: {col: 2, row: 2, color: 'white', captured: false, type: 'pawn', pieceImage: 'P'},
        WP3: {col: 3, row: 2, color: 'white', captured: false, type: 'pawn', pieceImage: 'P'},
        WP4: {col: 4, row: 2, color: 'white', captured: false, type: 'pawn', pieceImage: 'P'},
        WP5: {col: 5, row: 2, color: 'white', captured: false, type: 'pawn', pieceImage: 'P'},
        WP6: {col: 6, row: 2, color: 'white', captured: false, type: 'pawn', pieceImage: 'P'},
        WP7: {col: 7, row: 2, color: 'white', captured: false, type: 'pawn', pieceImage: 'P'},
        WP8: {col: 8, row: 2, color: 'white', captured: false, type: 'pawn', pieceImage: 'P'},
        BR1: {col: 1, row: 8, color: 'black', captured: false, type: 'rook', pieceImage: 'R'},
        BKn1: {col: 2, row: 8, color: 'black', captured: false, type: 'knight', pieceImage: 'Kn'},
        BB1: {col: 3, row: 8, color: 'black', captured: false, type: 'bishop', pieceImage: 'B'},
        BK: {col: 4, row: 8, color: 'black', captured: false, type: 'king', pieceImage: 'K'},
        BQ: {col: 5, row: 8, color: 'black', captured: false, type: 'queen', pieceImage: 'Q'},
        BB2: {col: 6, row: 8, color: 'black', captured: false, type: 'bishop', pieceImage: 'B'},
        BKn2: {col: 7, row: 8, color: 'black', captured: false, type: 'knight', pieceImage: 'Kn'},
        BR2: {col: 8, row: 8, color: 'black', captured: false, type: 'rook', pieceImage: 'R'},
        BP1: {col: 1, row: 7, color: 'black', captured: false, type: 'pawn', pieceImage: 'P'},
        BP2: {col: 2, row: 7, color: 'black', captured: false, type: 'pawn', pieceImage: 'P'},
        BP3: {col: 3, row: 7, color: 'black', captured: false, type: 'pawn', pieceImage: 'P'},
        BP4: {col: 4, row: 7, color: 'black', captured: false, type: 'pawn', pieceImage: 'P'},
        BP5: {col: 5, row: 7, color: 'black', captured: false, type: 'pawn', pieceImage: 'P'},
        BP6: {col: 6, row: 7, color: 'black', captured: false, type: 'pawn', pieceImage: 'P'},
        BP7: {col: 7, row: 7, color: 'black', captured: false, type: 'pawn', pieceImage: 'P'},
        BP8: {col: 8, row: 7, color: 'black', captured: false, type: 'pawn', pieceImage: 'P'},
    }
}

export default function chessSetReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
}
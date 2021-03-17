const ProductDetail = require('../models/Products');

let scale_quant = 20;
let coordinates = {};

ProductDetail.find((err, products) => {

    let n = products.length; // number of products in the board

    // initially all the entries in the board is empty
    // 0 - not visited
    // 1  - visited

    let board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];


    for (let i = 0; i < n; i++) {
        let x = ((products[i].x_cord) / scale_quant) - 1;
        let y = ((products[i].y_cord) / scale_quant) - 1;
        // marking the position of the product in the board
        board[x][y] = 1;
    }

    // let tmp = "";

    // for (let i = 0; i <= 5; i++) {
    //     for (let j = 0; j <= 5; j++) {
    //         tmp += board[i][j] + " ";
    //     }
    //     console.log(tmp);
    //     tmp = "";
    // }

    let itemType = req.body.item_type;
    let final_x_cord = -1;
    let final_y_cord = -1;

    if (itemType === "Food") {
        // for food
        for (let i = 5; i >= 0; i--) {
            for (let j = 0; j <= 5; j++) {
                if (board[i][j] === 0) {
                    final_x_cord = i;
                    final_y_cord = j;
                    break;
                }
            }
            if (final_x_cord !== -1 && final_y_cord !== -1) {
                break;
            }
        }
    } else if (itemType === "Cloth") {
        // for cloth
        final_x_cord = -1;
        final_y_cord = -1;
        for (let i = 3; i >= 0; i--) {
            for (let j = 0; j <= 5; j++) {
                if (board[i][j] === 0) {
                    final_x_cord = i;
                    final_y_cord = j;
                    break;
                }
            }
            if (final_x_cord !== -1 && final_y_cord !== -1) {
                break;
            }
        }
        if (final_x_cord === -1 && final_y_cord === -1) {
            for (let i = 5; i >= 4; i--) {
                for (let j = 0; j <= 5; j++) {
                    if (board[i][j] === 0) {
                        final_x_cord = i;
                        final_y_cord = j;
                        break;
                    }
                }
                if (final_x_cord !== -1 && final_y_cord !== -1) {
                    break;
                }
            }
        }
    } else {
        // for other
        final_x_cord = -1;
        final_y_cord = -1;
        for (let i = 1; i >= 0; i--) {
            for (let j = 0; j <= 5; j++) {
                if (board[i][j] === 0) {
                    final_x_cord = i;
                    final_y_cord = j;
                    break;
                }
            }
            if (final_x_cord !== -1 && final_y_cord !== -1) break;
        }
        if (final_x_cord === -1 && final_y_cord === -1) {
            for (let i = 5; i >= 2; i--) {
                for (let j = 0; j <= 5; j++) {
                    if (board[i][j] === 0) {
                        final_x_cord = i;
                        final_y_cord = j;
                        break;
                    }
                }
                if (final_x_cord !== -1 && final_y_cord !== -1) break;
            }
        }
    }
    coordinates = {
        x: final_x_cord,
        y: final_y_cord
    }
})

exports = module.exports = coordinates;
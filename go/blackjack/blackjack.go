package blackjack

var cards = map[string]int{
    "ace": 11, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7,
    "eight": 8, "nine": 9, "ten": 10, "jack": 10, "queen": 10, "king": 10,
}

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
    value, ok := cards[card]
    if ok {
        return value
    }
    return 0
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
    playerSum := ParseCard(card1) + ParseCard(card2)
    dealerValue := ParseCard(dealerCard)

    switch {
    case card1 == "ace" && card2 == "ace":
        return "P" // Split

    case playerSum == 21: // Natural Blackjack
        // Win (W) if dealer DOES NOT have 10 or 11.
        // Stand (S) if dealer HAS 10 or 11 (Ace or Ten-card).
        if dealerValue == 10 || dealerValue == 11 {
            return "S" // Stand (or push/insurance decision)
        }
        return "W"      // Win
    
    // ... (rest of the cases remain the same)
    case playerSum >= 17 && playerSum <= 20: // Sums 17, 18, 19, 20
        return "S" // Stand

    case playerSum >= 12 && playerSum <= 16: // Sums 12, 13, 14, 15, 16
        if dealerValue < 7 {
            return "S"
        }
        return "H" // Hit

    case playerSum <= 11:
        return "H" // Hit

    default:
        return "H"
    }
}
const Card = require('../../Card.js');

class Mothergun extends Card {
    setupCardAbilities(ability) { // eslint-disable-line no-unused-vars
        this.action({
            target: {
                reveal: {
                    activePromptTitle: 'Choose which cards to reveal',
                    mode: 'unlimited',
                    controller: 'self',
                    location: 'hand',
                    cardCondition: card => card.hasHouse('mars')
                },
                damage: {
                    dependsOn: 'reveal',
                    activePromptTitle: 'Choose a creature to damage',
                    gameAction: ability.actions.dealDamage(context => ({
                        amount: context.targets.reveal ? context.targets.reveal.length : 0
                    }))
                }
            },
            effect: 'reveal {1} from their hand, and deal {2} damage to {3}',
            effectArgs: context => [context.targets.reveal, context.targets.reveal.length, context.targets.damage]
        });
    }
}

Mothergun.id = 'mothergun'; // This is a guess at what the id might be - please check it!!!

module.exports = Mothergun;

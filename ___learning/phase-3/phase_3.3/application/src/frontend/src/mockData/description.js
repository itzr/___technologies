export default [{
    'compound-11': {
        basic:  {
            proposalId: '11',
            result: 'PASS',
            votesFor: '7.71804523194685E+23',
            votesAgainst: '1336940941763063600',
            proposerAddress: '8169522c2c57883e8ef80c498aab7820da539806',
            targets: '["3d9819210a31b4961b30ef54be2aed79b9c9cd3b","af601cbff871d0be62d18f79c31e387c76fa0374"]',
            values: '[0,0]',
            signatures:'["_setPendingImplementation(address)","_become(address)"]',
            calldatas: "[\"000000000000000000000000af601cbff871d0be62d18f79c31e387c76fa0374\",\"0000000000000000000000003d9819210a31b4961b30ef54be2aed79b9c9cd3b\"]",
            eventBlockTime: '28/06/20 02:13',
            votesRequired: '400,000 = 4% of Comp',
            submissionTimeFrame: "\"- 25/06/20 02:13 \n" +
                "- 3 days\n" +
                "- 15 blocks\"",
        },
        summary: '# COMP Distribution Patch This proposal implements a new Comptroller contract, patching the [refreshCompSpeeds](https://compound.finance/docs/comptroller#refresh-comp-speeds) function. It modifies the allocation of COMP across markets, by removing the borrowing interest rate as a weighting mechanism. Each market is allocated COMP relative to borrowing demand; the allocation is then split equally between suppliers and borrowers. The function has also been updated to require an external account (not a smart contract), reducing the risk of griefing. This patch has been [discussed]',
        article: {
            hook: 'Compound aims to resolve an issue that is utilising 80% of BAT\'s liquid supply. The protocol will allocate COMP to markets proportional to the users\' demand for borrowing each asset. (i.e. COMP based on Token Pool XYZ)',
            rest: '\n' +
                'This fixes an issue caused by a previous proposal which pushed users to "yield farm" in the markets with the highest interest rates.\n' +
                '\n' +
                'Earlier this year, Compound announced it wanted to reward users by giving them increased ownership of the protocol - that being said, the team and investors still owe more than half of the equity. Compound’s idea is that by giving away governance/compound tokens, it would increase its popularity and its value.\n' +
                '\n' +
                'So, they announced a four-year period where the protocol would give out COMP tokens to users, a fixed amount every day until it was gone. Every day, the Compound protocol looks at everyone who had lent money to the application and who had borrowed from it and gives them COMP proportional to their share of the day’s total business.\n' +
                '\n' +
                'The creation of COMP led to unintended consequences, one of which was the crowding of lending and borrowing BAT -  a previously unpopular market. The reason being that this was the easiest way for users to mine as much COMP as possible.\n' +
                '\n' +
                'COMP was distributed based on the interest rates of the tokens borrowed/lent. Since, BAT offered the highest interest rate and users naturally gravitated towards it.\n' +
                '\n' +
                'According to DeFi Rate, $319m of BAT out of $391m in liquidity is locked up in Compound.\n' +
                '\n' +
                'To address risky yield farming, Compound Labs CTO, Geoffrey Hayes, proposed removing "interest accrued" metric. Whereby the protocol will instead allocate COMP to markets proportional to the users\' demand for borrowing each asset.\n' +
                '\n' +
                'The patch will affect all borrowers as they’ll receive the same amount of COMP no matter how high the interest rate they’re borrowing at is. \n' +
                '\n' +
                'Data from Compound has shown that the patch, implemented on Jun. 27, had an immediate effect on the distribution of COMP and has effectively resolved the issue. Nonetheless, the event highlights the need for tight control mechanisms when it comes to yield farming as more and more people enter the market unaware of the risks it carries.\n' +
                '\n' +
                'In the Compound proposal discussion, it was noted: \n' +
                '\n' +
                '“We\'re [Compound Labs] starting this thread, and opening a public pull request to go along with it. The pull request is a simple protocol upgrade that addresses two issues with the COMP Distribution, raised by the community:\n' +
                '\n' +
                '1. It\'s possible to temporarily grief the allocation of COMP across markets using flash loans; the upgrade prevents this, by requiring an externally owned account to refresh the per-market allocation, not a smart contract.\n' +
                '\n' +
                '2. People are "yield farming" in whichever market has the highest borrowing cost; the upgrade removes interest from allocation of COMP across markets, and instead allocates COMP proportional to borrowing demand, as suggested in this thread. The allocation formula, used to determine how much COMP per block is allocated to each market, is adjusted\n' +
                '\n' +
                'from: totalBorrows * borrowingRatePerBlock * USD Value\n' +
                'to: totalBorrows * USD Value\n' +
                '\n' +
                'This should remove the incentive to push markets into extreme levels of utilization, and for farmers to gather in a single market (BAT); instead, borrowing should return to a normal equilibrium, based on natural borrowing demand. For a borrower, they will receive the same amount of COMP whether they are borrowing in a high interest rate, or a low interest rate market; their decision which market to borrow from should be much closer to a "pre COMP Distribution" world.\n' +
                '\n' +
                '…\n' +
                '\n' +
                'The distribution allocates COMP proportional to interest paid/received. The formula allocates 0.50 COMP / block ("COMP Speed") to each market based on the ratio of:\n' +
                '\n' +
                'totalBorrows * borrowingRatePerBlock * USD Value\n' +
                '\n' +
                'Within the market, 0.25 COMP is allocated to the suppliers of the asset, and 0.25 COMP is allocated to the borrowers of the asset.\n' +
                '\n' +
                'Before launching the distribution, our team believed this would lead to a fair distribution; it does, if the market expectation of the price of COMP isn’t 200+ dollars/COMP (which we, nor anybody expected).\n' +
                '\n' +
                'At a high COMP market value, the “income” from interest expense is a multiple of interest expense; the more interest paid, the better for the user.\n' +
                '\n' +
                'Think of the protocol as rewarding borrowing ^2. This has led to uneven rewards, and a Focal point on specific assets, with the highest borrowing interest rate; first,\n' +
                'USDT, and then, BAT (and other tokens, like ZRX).\n' +
                '\n' +
                'The basic farming strategy works as follows:\n' +
                '\n' +
                'Users identify a market with a high maximum interest rate; they borrow all liquidity, maximizing borrowing costs for all users, and supply the same asset from a second\n' +
                'account. The extreme interest cost to borrow is offset by supply income on the other side; the only true cost is the Reserve Factor, and the interest shared with natural suppliers of the token (which are limited in number).\n' +
                'If another market can maintain a higher borrowing cost, users switch ("crop rotation").\n' +
                '\n' +
                'Problem 1: Users are concentrating extreme liquidation risk into the BAT (and ZRX) market, placing themselves and the protocol in jeopardy.\n' +
                '\n' +
                'Problem 2: The majority of existing users, using the protocol honestly, are receiving little to no COMP Distribution. This goes against the goal of the COMP Distribution to bring core users into Governance.\n' +
                '\n' +
                '“\n'
        },
        proposedSolutions: {
            'Potential Solution 1: Reserve Factors': 'The Reserve Factor on each asset can be increased to make supplying and borrowing the same asset more cost-prohibitive. Collateral assets with high sloping interest rate curves (BAT/ZRX/REP) could have a high, uniform Reserve Factor applied to them, say 50-80%.\n' +
                '\n' +
                'This would increase the cost of farming the asset, while providing Reserves to the protocol to compensate for the additional liquidation risk being added to the system\n' +
                '.\n' +
                'The downside of the change would be lower supply interest rates for the assets, which has never been a problem (and especially isn\'t, presently).\n',
            'Potential Solution 2: Updating Interest Rate Models': 'The interest rate models across all assets can be made more uniform; this could create a level playing field across assets, though markets would still suffer from a Focal point / crop rotation problem.',
            'Potential Solution 3: Updating the Distribution Formula (chosen)': 'The allocation across markets can be updated to:\n' +
                '- totalBorrows * USD Value\n' +
                '\n' +
                'This would shift the distribution to reward each dollar of assets borrowed uniformly, not each dollar of interest paid.\n' +
                '\n' +
                'The interest rate in each market should revert back to natural borrowing demand / equilibriums (or, a small multiple on them), and would decrease incentives to game utilization rates.\n' +
                '\n' +
                'This would require a very modest change to the Comptroller contract.\n',
            'Potential Solution 4: Reduce COMP Speed': 'While the community gets its bearings, the COMP Speed could be reduced from 0.50 COMP / block. This would not necessarily change the distribution across markets significantly (though, it does have a non-zero impact), and would give the community more time to respond.\n',
        },
        definitions: {
            'What is yield farming?': '' +
                'Putting crypto temporarily at the disposal of some startup’s application earns its owner more cryptocurrency. At the simplest level, a yield farmer might move assets around within Compound, constantly chasing whichever pool is offering the best APY from week to week. This might mean moving into riskier pools from time to time, but a yield farmer can handle risk. “Farming opens up new price arbs [arbitrage] that can spill over to other protocols whose tokens are in the pool,” said Maya Zehavi, a blockchain consultant. Because these positions are tokenized, though, they can go further.',
            'What is liquidity mining?': '' +
                'Liquidity mining is when a yield farmer gets a new token as well as the usual return (that’s the “mining” part) in exchange for the farmer’s liquidity.',
            'What is a Focal Point?': '' +
            'In game theory, a focal point (or Schelling point) is a solution that people tend to choose by default in the absence of communication.\n' +
                '\n' +
                'The concept was introduced by the American economist Thomas Schelling in his book The Strategy of Conflict (1960).\n' +
                '\n' +
                'Schelling states that "(p)eople can often concert their intentions or expectations with others if each knows that the other is trying to do the same" in a cooperative situation (at page 57), so their action would converge on a focal point which has some kind of prominence compared with the environment.\n' +
                '\n' +
                'However, the conspicuousness of the focal point depends on time, place and people themselves. It may not be a definite solution.\n',
        },
        userCommentary: {
            'AMIR': 'First of all, I want to echo the sentiment that these governance decisions feel incredibly rushed. This was put to a vote only a few hours after the proposal was posted to this forum, leaving little time for any meaningful discussion or alternate proposals. These decisions are all binary and have very little flexibility, which make it even more important that they are well thought out and precise before being put to a vote.\n' +
                '\n' +
                'Combined with a heavy bias for voting “yes”, this is how bad decisions get passed.\n' +
                '\n' +
                'A perfect example of this is proposal #7 to distribute COMP to users. Literally 100% of voters voted “yes” despite this situation being entirely predictable. I was surprised that there was no public discussion of these issues before the vote.\n' +
                '\n' +
                'I know it isn’t possible to prevent proposals from being submitted at the smart contract level, but I think this community should push to leave more time for discussion before putting things to a vote. I would go so far as to consider proposals without a sufficient wait period between starting a discussion and voting to be malicious (barring extenuating circumstances, which this isn’t IMO). \n' +
                '\n' +
                'As for actual solutions, I would start by identifying the behavior that we are trying to incentivize. This is unclear to me at this point, and governance proposal are going to be all over the place without this framework.\n' +
                '\n' +
                'Here\'s how I look at external incentives in Compound:\n' +
                '\n' +
                'The organic state of the system is roughly the pre-distribution state. Adding external incentives will necessarily create arbitrage opportunities and inorganic usage. Ideally capturing this arbitrage would provide some value to the system.\n' +
                '\n' +
                'What is that value that we are trying to create?\n' +
                '\n' +
                'Without sybil resistance, these arbitrage opportunities can and will be maximally gamed. For example, #3 will create an incentive to borrow from markets with the lowest interest. Is that desirable? We can make the arbitrage opportunity smaller be adding costs or decreasing rewards.\n' +
                '\n' +
                'I think #2 and #3 are most likely playing a game of whack-a-mole. #1 does decrease the opportunity size, but it may also create some expectation of future cash flows to COMP holder and be offset by an increased COMP price. If #1 is the route taken, I would gradually increase the reserve factors over time and see how the market reacts rather than immediately jumping to an extreme. In order for that to be effective, we will need to first define what the desired state of the system is. #4 is also likely to be offset by an increased COMP price.\n' +
                '\n' +
                'Another way to add cost which I don\'t think has been mentioned is to add a timelock to claiming COMP. This turns farming COMP into less arbitrage and more of a risky trade. Of course people will still hedge with derivatives, but that has a higher barrier to entry and comes with additional risk + capital constraints.\n',
            'MyInterpretaion': 'I\'m not a fan of bandaid fixes that address symptoms rather than the problem. A 50% reserve factor will not lead to a properly functioning market.\n' +
                '\n' +
                'The goal is to have a proper market AND a fair COMP distribution. Whatever solution is picked, it needs to fix the COMP distribution without affecting the market itself.\n' +
                '\n' +
                'Personally, I think COMP should not be distributed based on interest at all. Basing it on interest earned guarantees that COMP is distributed differently based on each assets performance, which can always be gamed. I think COMP should be distributed based on USD/ETH value of assets being lent/borrowed.\n' +
                '\n' +
                'Also, the 50/50 evaluation between lenders and borrowers makes it gameable. A user is rewarded for both lending and borrowing, who can then use the borrowed assets to acquire more to lend. They\'re being rewarded for both halves of a circular system. All borrowers are also lenders, so reducing the COMP borrowers earn does not exclude any one group from earning COMP, it just increases the amount lenders who don\'t borrow/abuse would get. I think a 75/25 split would be a fair place to start, and if that\'s not enough move towards a 90/10 split.\n',
            'OTHER 1': 'I think that it is best to change the whole COMP distribution system as described in 3 for a long term fix and return to normality. I don\'t think that distributing only to borrowers is correct as many users just use Compound for lending gains on their assets. They should get a share as well. Additionally, encouraging excess borrowing will cause excessively high borrow interest rates barring normal usage again. As blck said, I don\'t believe the community is ready for a new Comptroller vote yet; first we should have a few safer smart contract governance calls before updating the most vital part of the system.\n',
            'OTHER 2': 'Potential solution 3 looks most perspective from all of them. As soon as i saw where distribution is going it become obvious that distribution model with interest isn\'t great, though it looked fair on paper indeed.\n' +
                '\n' +
                'First it brought concerns about having too big share of USDT in Compound, comparing with other assets, and now as other markets grew as well, it\'s more of a bubble problem. Massive leverage accumulated in protocol presents risk for all ecosystem in situation of liquidity shock. AS well, what wasn\'t obvious initially, but became a thing during distribution, is if interest portion is there, one of the biggest markets - Ether, is going to be excluded from distribution, as historically rates there were very low, and people turn to be smart enough, to not "short" it, by leveraging on borrow side to try to push rates high, as it would present massive risk in case of sudden upside movement of crypto market. That doesn\'t look fair to me, as Ether is important collateral asset for protocol. Maybe the most important of all of them. Only BTC on Ethereum either in form of custodial (WBTC) version or in form of other wrapped versions could be more important.\n',
            'OTHER 3': 'Potential Solution 3. This is probably one of the best solutions, I think some mix of assets loaned/ borrowed and interest received/paid would be best maybe ((YourBorrowed / TotalBorrowed) X 0.5 + (YourIntrest / TotaIIntrest) X 0.5) would work\n',
            'OTHER 4': 'I think it is important to identify as a community what exactly is the urgency of the current situation before making any rash decisions that may be not be viewed favorably in hindsight:\n' +
                '\n' +
                '\n' +
                'If we believe that liquidity mining practices present a systematic risk to the protocol, then perhaps I would agree it is time for quick and decisive action. But I do not think this proposal was suggested because COMP mining represents an economic risk to the protocol. With a collateral factor of 60%, BAT/0X would need a very significant move to induce losses to the protocol.\n' +
                '\n' +
                '\n' +
                'Is it that we believe those who colloquially "yield farm" are not worthy to be the future custodians of the COMP protocol? If so, who is it that we want to be the holders of COMP tokens if not savvy investors who take advantage of short term dislocations? Would we prefer that COMP tokens are distributed to passive investors in ETH with a long term view on the proliferation of permissionless finance? If that is the case, why did we incentivize borrowing in the first place by distributing 50% of COMP to borrowers even though it is a principle of the protocol that supply balance is strictly greater than borrow balance? I don\'t have the answers to these questions, but I think we have to be very clear as to why we would abruptly prevent COMP mining from playing out rather than waiting to see if market forces stabilize the expected returns from mining.\n' +
                '\n' +
                '\n' +
                'With respect to the potential solutions:\n' +
                '\n' +
                '1. 50-80% reserve factor is punitive to holders of these tokens. Would rather amend the collateral factor if we aren\'t comfortable with the risk these tokens present. If we want to change incentives should focus on distribution.\n' +
                '2. This is a long term must in my opinion. At the moment the interest rate models for stablecoins feel arbitrary. Not sure if a short-term fix makes much sense here.\n' +
                '3. Likely the most viable solution if we do determine as a community who it is exactly we want to be the future custodians of this protocol.\n' +
                '4. Diminishes trust in the protocol. Worst option in my mind.\n',
        }

    }

}]


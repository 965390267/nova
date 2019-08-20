module.exports = {
    index: {
        total: 'total assets',
        balance: 'Available balance',
        yesterdayIncome: "Yesterday's earnings",
        totalIncome: 'Accumulated income',
        pendingAmount: 'Redemption',
        choosenode: 'Node Pledge',
        usenote: 'Instructions',
        problem: 'problem',
        mynode: 'My pledge node'
    },
    moneyrecord: {
        shoyyi: 'Profit',
        jine: 'accumulatedIncome'
    },
    mynodedetail: {
        zyje: 'The amount of my pledge',
        yeargetmoney: 'Projected Annualized Income',
        nodespeak: 'Node Declaration',
        myziyaje:'my node pledge',
        moneyrecord: 'record',
        shuhui: 'Redeem',
        zhiya: 'pledge',
        changenodezy: 'Replace node',
        shuhuiing: 'In redemption',
        zhiyaing: 'In pledge',
        packageing: 'Transactions are being packaged',
        cancel: 'Redemption',
        nearamount: 'Recent transactions',
        shuihuisuccess: 'Redemption Success',
        zhiyasuccess: 'Pledge Successful',
        shuihuifailed: 'Redemption failure',
        zhiyafailed: 'Failure of pledge',

    },
    nodeswiper: {
        effectnode: 'Effective Nodes',
        invalidnode: 'Pending node'
    },
    problem: {
        problem: 'Common problem',
        q1: 'What is Nova Node? ',
        q1note: 'In the Nova Staking Plan, people can apply for Nova Node, and create their own nodes where NOVA holders can stake and get reward. Nova Nodes are also the participators in the system, but they can get additional reward. After they are upgraded to the “principle nodes”, it is applicable for them to make proposals, join voting, etc. for the Nova ecosystem. ',
        q2: 'What is Nova Node Participator?',
        q2note: 'In the Nova Staking Plan issued by Nova Foundation, any Nova holder can stake their NOVA to the nodes and get rewards accordingly. ',
        q3: 'Why you should join the NOVA Staking Program? ',
        q3note: 'With the increase of staking amount, the circulation in the secondary market will decrease accordingly, which will facilitate the price surge of NOVA token. And when more participators join the ecosystem, it will eventually form the healthy staking ecosystem, and all the holders can get high returns. ',
        q4: 'What profits you can get after joining the NOVA staking program? ',
        q4note: 'Nova Foundation will distribute 100 million token to all the node participators, which means NOVA will run the deflationary economic model. Eventually, the token price will increase accordingly. ',
        q5: 'When staking will be valid, and when you can get reward after staking? ',
        q5note: 'It will be immediately valid after NOVA is staked, and the profits will be available the day after.',
        q6: 'When the reward will be distributed? ',
        q6note: 'Staking profits will be distributed to the accounts at 00:00 Singapore time, and it can be redeemed anytime. ',
        q7: 'Do Nova nodes need to charge management fees from the participators? ',
        q7note: 'The additional reward for Nova nodes will be from Nova Foundation.',
        q8: 'Is there any risk for staking NOVA? ',
        q8note: 'The staked NOVA will be locked, but you can redeem it anytime. If the node participator has some misbehavior and have some action which is not beneficial to Nova ecosystem, some of their NOVA will be fined, and the corresponding nova nodes will get penalty as well. Therefore, before accepting the stake of the participants, the nova nodes should make a strict qualification assessment of the participants.',
        q9:'When can I redeem the staked nova? ',
        q9note:'You can redeem the staked token anytime, but 10% of the staked amount will be deducted if you redeem immediately. The deduction will be taken as processing fee, and it will be burned. Normal redeem will charge 1% of the staked as processing fee, and it will be transferred to your account after 21 days. The processing fee will be burned as well.',
        q10:'How can I change the Nova Staking node?',
        q10note:'If you want to transfer from Node A to Node B for staking, it will take 21 days after you start the transfer, and you cannot stop during the process. In the 21 days, there will be no profit, and the profit will only be available after it is transferred to Node B. '
    },
    rule: {
        txt1: 'Nova Foundation’s vision is to build the long-term and substantial ecosystem for decentralized finance. NOVA, token of the Nova Incentive Protocol, will play the key role in the ecosystem. Thus, Nova Foundation decides to launch the Nova Staking Economy. ',
        txt2: 'The detailed rules are as following:',
        txt3: 'Restrictions on Participation: Those who hold NOVA can stake their token to arbitrary node, and become NOVA node participator. So far, there is no requirement for the staked amount. ',
        txt4: 'Staked amount limitation: no limitation. ',
        txt5: 'Apply for nodes: People can apply to build their own nodes, and when the staked amount in the nodes is over 1 million, the applicant will become the Nova node automatically. ',
        txt6: ' Rules on the nodes: Nova nodes are divided into proposal nodes and common nodes, and if the staked nova amount is over 1 million, the nodes can become common nodes and get rewards according to the rules. Initially, the number of proposal node will be one only, and when the overall staking amount (add all the staking amount in the nodes) increase by 30 million, there will one additional proposal node automatically. After becoming the proposal nodes, they can have the right to make proposals and voting to the development of the project, which fully represents the decentralized autonomous feature of blockchain ecosystem.',
        txt7: 'Rules on the node profit: Users can redeem their staked token whenever they want, but the profit is only available for minimum 24 hour staking period. ',
        txt8: 'Profits will be settled and distributed to the accounts every 00:00 (Singapore time) ',
        txt9: 'The detailed rules are as following:',
        txt10: 'B represents annual profit; ',
        txt11: 'N represents total staked amount;',
        txt12: 'Node participators will get daily reward according to the staked percentage. '
    },
    shuhui: {
        zhiyaed: 'Pledged',
        total: 'whole',
        atonceshuhui: 'Immediate redemption',
        normalshuhui: 'Ordinary redemption',
        shuhui: 'Redeem',
        note: 'Explain',
        note1: 'Ordinary redemption pledge needs to wait 7 days, and the pledge during redemption will not generate transactions.',
        note2: 'Immediate redemption pledge is immediately available, with 10% of the total fee deducted and permanently destroyed.'
    },
    zhiya: {
        canusemoney: 'Available balance',
        total: 'whole',
        placeholder: 'Input Quantity',
        zhiya: 'pledge',
        note1: 'pledge',
        note2: 'The pledge of NOVA to the valid node can be redeemed at any time, but the redemption pledge needs to wait 7 days.',
        note3: 'Profit',
        note4: 'The proceeds of pledge come from the reward and transaction procedure risk',
        note5: 'If the valid node misbehaves, it may be fined some pledged tokens, such as valid festival.',
        note6: 'Point double signature, often offline. In order to avoid risks, please carefully select qualified validation.',
        note7: 'node'
    },
    components: {
        alert: {
            title: 'Please authorize Nova to use wallet links',
            cancel: 'cancel',
            certain: 'confirm'
        },
        effectnode: {
            nodata: 'No data ~',
            zhiyatotalmoney: 'Total pledge',
            yujiyearmoney: ' Projected Annualized Income',
            zhiya: 'pledge',
            shouyi: 'Profit',
            moneyday: 'Expected earnings (days)',

        },
        homelistnode: {
            valiednode: 'Pending node',
            effectnode: 'Effective Nodes',
            zhiyatotalmoney: 'Total pledge',
            yujiyearmoney: ' Projected Annualized Income',
            zhiya: 'pledge',
            shouyi: 'Profit',
            moneyday: 'Expected earnings (days)',
        },
        invalidnode: {
            nodata: 'No data ~',
            nomoney: 'No gains',
            zhiyatotalmoney: 'Total pledge',
            yujiyearmoney: ' Projected Annualized Income',
            zhiya: 'pledge',
            shouyi: 'Profit',
            moneyday: 'Expected earnings (days)',
        }
    },
    language: {
        name: '中文'
    },
}
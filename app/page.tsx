'use client';

import React, { useState } from 'react';
import { Info, Users, DollarSign, TrendingUp } from 'lucide-react';

const WealthLadder = () => {
    const [selectedTier, setSelectedTier] = useState(null);

    const tiers = [
        {
            number: 1,
            name: "The Pinnacle",
            population: "500",
            popPercent: "0.000006%",
            avgWealth: "$100–500B",
            color: "from-purple-900 to-purple-800",
            description: "Hyper-concentrated apex of transnational wealth and influence controlling key levers of global finance, capital, and state-level policy.",
            examples: "Dynastic financial families, sovereign capital principals, ultra-private macro allocators"
        },
        {
            number: 2,
            name: "Macro-Architects",
            population: "3,500",
            popPercent: "0.000042%",
            avgWealth: "$10–50B",
            color: "from-purple-800 to-purple-700",
            description: "Institutional leaders directing global capital flows, resource systems, defense economics, and monetary policy architecture.",
            examples: "Central bank leadership, sovereign fund executives, megacorp power clusters"
        },
        {
            number: 3,
            name: "Wealth Movers",
            population: "32,000",
            popPercent: "0.000387%",
            avgWealth: "$2–10B",
            color: "from-purple-700 to-indigo-700",
            description: "Operational core managing global financial mechanics through multinational banking, transnational investments, and Bretton Woods-aligned governance.",
            examples: "World Bank/IMF councils, multinational bank executives, high-impact fund strategists"
        },
        {
            number: 4,
            name: "Structural Stewards",
            population: "4,000",
            popPercent: "0.000048%",
            avgWealth: "$500M–$5B",
            color: "from-indigo-700 to-indigo-600",
            description: "Elite professional intermediaries sustaining the legal, regulatory, and ideological continuity of the global economic system.",
            examples: "Senior regulators, elite financial attorneys, policy technocrats"
        },
        {
            number: 5,
            name: "Upper Class",
            population: "20,000,000",
            popPercent: "0.24%",
            avgWealth: "$10M–$500M",
            color: "from-indigo-600 to-blue-700",
            description: "Individuals with substantial capital holdings and intergenerational financial stability benefiting deeply from existing structural arrangements.",
            examples: "Major business owners, high-wealth investors, media and corporate elites"
        },
        {
            number: 6,
            name: "Upper-Middle Global",
            population: "300,000,000",
            popPercent: "3.63%",
            avgWealth: "$100K–$10M",
            color: "from-blue-700 to-blue-500",
            description: "Secure professionals and business stakeholders with meaningful personal agency but structural dependency on upper-tier economic stability.",
            examples: "Senior engineers, medical professionals, executives, successful entrepreneurs"
        },
        {
            number: 7,
            name: "Global Working Class",
            population: "3,000,000,000",
            popPercent: "36.3%",
            avgWealth: "$5K–$100K",
            color: "from-blue-400 to-cyan-500",
            description: "The productive backbone of the global economy responsible for essential services, manufacturing, logistics, education, healthcare, and technology.",
            examples: "Teachers, nurses, trades, factory workers, technicians, service labor"
        },
        {
            number: 8,
            name: "Lower-Middle / Precarious",
            population: "2,100,000,000",
            popPercent: "25.4%",
            avgWealth: "$500–$5K",
            color: "from-yellow-500 to-orange-500",
            description: "Populations sustaining near-subsistence livelihoods with minimal financial buffer and high vulnerability to economic, health, and climate shocks.",
            examples: "Underpaid urban workers, informal economy labor, rural low-income households"
        },
        {
            number: 9,
            name: "Global Poor",
            population: "1,800,000,000",
            popPercent: "21.8%",
            avgWealth: "$0–$500",
            color: "from-orange-500 to-red-500",
            description: "Communities experiencing persistent structural deprivation with limited access to consistent food, healthcare, shelter, and upward mobility.",
            examples: "Marginalized rural communities, extreme urban poverty zones"
        },
        {
            number: 10,
            name: "Indigenous and Parallel Societies",
            population: "476,000,000",
            popPercent: "5.76%",
            avgWealth: "Non-comparable",
            color: "from-emerald-600 to-green-700",
            description: "Peoples whose economic, cultural, and governance systems operate partially or wholly outside dominant capitalist structures.",
            examples: "Cherokee Nation, Navajo, Sami, Māori, Aboriginal Australians, Amazonian nations",
            special: true
        },
        {
            number: 11,
            name: "Destitute / Displaced",
            population: "600,000,000",
            popPercent: "7.26%",
            avgWealth: "~$0",
            color: "from-red-500 to-red-700",
            description: "Populations experiencing humanitarian collapse due to war, state failure, climate displacement, or systemic dispossession.",
            examples: "Refugees, climate migrants, stateless persons, conflict survivors"
        },
        {
            number: 12,
            name: "The Enslaved",
            population: "50,000,000",
            popPercent: "0.60%",
            avgWealth: "$0",
            color: "from-red-700 to-black",
            description: "Individuals under forced labor, trafficking, coercive exploitation, or debt bondage lacking meaningful legal personhood.",
            examples: "Modern slavery in cobalt, cocoa, mining, fishing, agriculture, and textiles"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Global Economic Injustice
                    </h1>
                    <p className="text-xl text-slate-300 mb-2">2025 Sociopolitical Analysis — Population: 8.27 Billion</p>
                    <p className="text-sm text-slate-400 italic">A stratified examination of global power, wealth concentration, and socioeconomic vulnerability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-500/30 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <Users className="text-purple-400" size={28} />
                            <h3 className="text-lg font-semibold">Top 40,000</h3>
                        </div>
                        <p className="text-3xl font-bold mb-2">$240 Trillion Controlled</p>
                        <p className="text-sm text-slate-300">0.00048% of humanity directing nearly half of global capital flows.</p>
                        <p className="text-xs text-slate-400 mt-2">Average Approximate Net Position: ~$6B Per Individual</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-500/30 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <Users className="text-blue-400" size={28} />
                            <h3 className="text-lg font-semibold">Bottom 8.27B</h3>
                        </div>
                        <p className="text-3xl font-bold mb-2">$235 Trillion Distributed</p>
                        <p className="text-sm text-slate-300">Represents the remaining global population and all structural dependency tiers.</p>
                        <p className="text-xs text-slate-400 mt-2">Average Approximate Net Position: ~$28,000</p>
                    </div>

                    <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 border border-red-500/30 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <TrendingUp className="text-red-400" size={28} />
                            <h3 className="text-lg font-semibold">The Ratio</h3>
                        </div>
                        <p className="text-3xl font-bold mb-2">211,000 : 1</p>
                        <p className="text-sm text-slate-300">Comparative influence ratio between an individual within the pinnacle class and an average global citizen.</p>
                    </div>
                </div>

                <div className="space-y-4 mb-12">
                    {tiers.map((tier) => {
                        const isSelected = selectedTier === tier.number;
                        const isTop4 = tier.number <= 4;
                        const isIndigenous = tier.special;

                        return (
                            <div
                                key={tier.number}
                                onClick={() => setSelectedTier(isSelected ? null : tier.number)}
                                className={`bg-gradient-to-r ${tier.color} rounded-lg border-2 transition-all duration-300 cursor-pointer
                  ${isSelected ? 'border-white scale-[1.02] shadow-2xl' : 'border-transparent hover:border-white/30'}
                  ${isTop4 ? 'min-h-[120px]' : 'min-h-[100px]'} ${isIndigenous ? 'border-emerald-400/50' : ''}`}
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-4xl font-bold opacity-50">T{tier.number}</span>
                                                <div>
                                                    <h3 className="text-2xl font-bold flex items-center gap-2">
                                                        {tier.name}
                                                        {isIndigenous && <span className="text-sm bg-emerald-500/30 px-2 py-1 rounded">Outside System</span>}
                                                    </h3>
                                                    <p className="text-sm opacity-90">{tier.description}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 mt-4">
                                                <div>
                                                    <p className="text-xs opacity-70 mb-1">Population</p>
                                                    <p className="font-bold">{tier.population}</p>
                                                    <p className="text-xs opacity-70">{tier.popPercent}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs opacity-70 mb-1">Avg Wealth</p>
                                                    <p className="font-bold">{tier.avgWealth}</p>
                                                </div>
                                                <div className="flex items-center justify-end">
                                                    <Info size={20} className="opacity-50" />
                                                </div>
                                            </div>

                                            {isSelected && (
                                                <div className="mt-4 pt-4 border-t border-white/20">
                                                    <p className="text-sm mb-2"><span className="font-semibold">Examples:</span> {tier.examples}</p>
                                                    {tier.number <= 4 && (
                                                        <div className="mt-2 p-3 bg-black/30 rounded">
                                                            <p className="text-xs font-semibold mb-1">Part of Top 40,000 Group</p>
                                                            <p className="text-xs opacity-90">This tier contributes to the $240T controlled by 0.00048% of humanity</p>
                                                        </div>
                                                    )}
                                                    {isIndigenous && (
                                                        <div className="mt-2 p-3 bg-emerald-900/30 rounded border border-emerald-500/30">
                                                            <p className="text-xs font-semibold mb-1">Outside Modern Capitalist System</p>
                                                            <p className="text-xs opacity-90">Indigenous populations exist largely outside the modern wealth ladder, maintaining traditional economies, land relationships, and governance structures. This includes both large federally-recognized nations with millions of members and small isolated communities. They are neither enslaved nor destitute, but occupy a parallel socioeconomic reality.</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Info size={24} className="text-blue-400" />
                            Key Structural Insights
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex gap-2">
                                <span className="text-purple-400 font-bold">•</span>
                                <span><strong>Systemic alignment rather than conspiracy:</strong> power concentrates through institutional design and incentive reinforcement.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-400 font-bold">•</span>
                                <span><strong>Temporal asymmetry:</strong> upper tiers plan in decades; vulnerable tiers survive in days and weeks.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-emerald-400 font-bold">•</span>
                                <span><strong>Indigenous autonomy:</strong> ~476M people function in parallel economic realities distinct from global capitalism.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-yellow-400 font-bold">•</span>
                                <span><strong>Three structural stabilizers:</strong> legal architecture, cultural normalization, economic dependency.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-red-400 font-bold">•</span>
                                <span><strong>Democracy paradox:</strong> universal voting rights coexist with extreme inequality in material and policy influence.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <DollarSign size={24} className="text-green-400" />
                            The Moral Reality
                        </h3>
                        <div className="space-y-3 text-sm text-slate-300">
                            <p>
                                An estimated <strong className="text-red-400">50 million people remain enslaved</strong> in supply chains while humanity simultaneously possesses unprecedented wealth, technology, and institutional capacity.
                            </p>
                            <p className="text-xs opacity-75">
                                This demonstrates that:<br />
                                • wealth accumulation is compatible with exploitation<br />
                                • global economic systems externalize moral responsibility<br />
                                • moral progress is neither automatic nor guaranteed
                            </p>
                            <p className="mt-4 pt-4 border-t border-slate-600 text-xs">
                                <strong>Central Question:</strong><br />
                                Will restructuring occur through conscious reform, or will it be forced through conflict, collapse, or irreversible climate impact?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-sm text-slate-500">
                    <p>Click any tier for detailed information • Based on 2025 global population and wealth estimates</p>
                    <p className="mt-2 text-xs">Global wealth: ~$500T | Top 40,000 control: $240T (48%) | Remaining 8.27B: $235T (52%)</p>
                    <p className="mt-1 text-xs text-emerald-400">Note: Tier 10 represents indigenous populations existing largely outside modern capitalist systems</p>

                    <div className="mt-8 pt-6 border-t border-slate-700 text-left max-w-4xl mx-auto">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">Sources & Methodological Notes:</h4>
                        <p className="text-xs text-slate-400 mb-2">
                            Population estimates derived from United Nations World Population Prospects (2024).<br />
                            Global wealth estimates informed by Credit Suisse / UBS Global Wealth Report and World Inequality Database (2023–2024).<br />
                            Forced labor estimates based on International Labour Organization (ILO) Global Estimates of Modern Slavery (2022–2024).<br />
                            Displacement figures informed by UNHCR Global Trends Reports.
                        </p>
                        <p className="text-xs text-slate-400 italic mb-4">
                            This framework synthesizes demographic, economic, and sociopolitical research for analytical purposes.<br />
                            Figures represent structured approximations, not absolute certainties.
                        </p>
                        <p className="text-xs text-slate-500 italic">
                            This model is designed as a sociological interpretive framework rather than a strictly econometric classification. It emphasizes structural power, systemic inequality, and lived human impact rather than narrow financial indexing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WealthLadder;

/* FIX */
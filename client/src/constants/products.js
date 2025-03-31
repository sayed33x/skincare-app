// src/constants/products.js
const products = [
  {
    id: 1,
    name: "Babe Foot Repairing Cream 10% Urea 100 ml",
    brand: "Babe",
    category: "Moisturizer",
    skinType: ["Dry"],
    concerns: ["foot skin dryness"],
    description: "Moisturizer for foot and cracked heels",
    imageUrl: "foot-cream.jpg",
    size: "100 ml",
    priceRange: '$',
    keyIngredients: ["Urea 10%", "Glycerin", "Shea Butter"],
    bestFor: "Cracked heels and extremely dry feet",
    keyBenefits: [
      "Repairs and prevents cracked heels",
      "Intensive 24-hour hydration",
      "Contains healing urea formula"
    ]
  },
  {
    id: 2,
    name: "Babe Roll-On Deodorant 50ml",
    brand: "Babe",
    category: "Deodorant",
    skinType: ["All Skin Types"],
    concerns: ["excessive sweating"],
    description: "Deodorant for 24 hours protection",
    imageUrl: "deodorant.jpg",
    size: "50 ml",
    priceRange: '$',
    keyIngredients: ["Aluminum Chlorohydrate", "Soothing Complex"],
    bestFor: "All-day odor and wetness protection",
    keyBenefits: [
      "48-hour protection",
      "Alcohol-free formula",
      "Gentle on sensitive skin"
    ]
  },
  {
    id: 3,
    name: "Babe Anti Stretch Marks Cream 200 ml",
    brand: "Babe",
    category: "Moisturizer",
    skinType: ["Dry", "Normal"],
    concerns: ["stretch marks"],
    description: "Treatment and prevention of stretch marks",
    imageUrl: "stretch-mark-cream.jpg",
    size: "200 ml",
    priceRange: '$$',
    keyIngredients: ["Centella Asiatica", "Hyaluronic Acid", "Vitamin E"],
    bestFor: "Pregnancy and weight fluctuation marks",
    keyBenefits: [
      "Improves skin elasticity",
      "Reduces appearance of existing marks",
      "Safe during pregnancy"
    ]
  },
  {
    id: 4,
    name: "Topicrem Ac Control Intensive Serum 34ml",
    brand: "Topicrem",
    category: "Treatment",
    skinType: ["Oily", "Combination"],
    concerns: ["acne", "acne marks", "blackheads"],
    description: "Targeted treatment for acne and blemishes",
    imageUrl: "acne-serum.jpg",
    size: "34 ml",
    priceRange: '$$',
    keyIngredients: ["Niacinamide 10%", "Zinc PCA", "Salicylic Acid"],
    bestFor: "Acne-prone and blemish-prone skin",
    keyBenefits: [
      "Reduces acne lesions by 86% in 4 weeks",
      "Minimizes pores appearance",
      "Prevents future breakouts"
    ]
  },
  {
    id: 5,
    name: "Babe Super Fluid Depigment Sunscreen SPF50 50ml",
    brand: "Babe",
    category: "Sunscreen",
    skinType: ["All Skin Types"],
    concerns: ["sun protection", "dark spots"],
    description: "Daily sunscreen with brightening benefits",
    imageUrl: "sunscreen-depigment.jpg",
    size: "50 ml",
    priceRange: '$$',
    keyIngredients: ["Octinoxate", "Titanium Dioxide", "Niacinamide"],
    bestFor: "Sun protection while evening skin tone",
    keyBenefits: [
      "SPF 50+ PA++++ protection",
      "Lightweight, non-greasy formula",
      "Helps fade dark spots over time"
    ]
  },
  {
    id: 6,
    name: "Babe Depigment Lotion Glow 150ml",
    brand: "Babe",
    category: "Whitening",
    skinType: ["All Skin Types"],
    concerns: ["dark spots", "lack of radiance"],
    description: "Brightening body lotion for even skin tone",
    imageUrl: "depigment-lotion.jpg",
    size: "150 ml",
    priceRange: '$$',
    keyIngredients: ["Niacinamide", "Vitamin C", "Licorice Extract"],
    bestFor: "Dull skin and hyperpigmentation",
    keyBenefits: [
      "Visible radiance in 15 minutes",
      "Gradual evening of skin tone",
      "Hydrating formula"
    ]
  },
  {
    id: 7,
    name: "Babe Depigment Control Fluid 40ml",
    brand: "Babe",
    category: "Whitening",
    skinType: ["All Skin Types"],
    concerns: ["dark spots", "uneven skin tone"],
    description: "Targeted dark spot corrector",
    imageUrl: "depigment-fluid.jpg",
    size: "40 ml",
    priceRange: '$$',
    keyIngredients: ["Tranexamic Acid", "Niacinamide", "Alpha-Arbutin"],
    bestFor: "Persistent hyperpigmentation",
    keyBenefits: [
      "Clinically proven to reduce dark spots",
      "Lightweight serum texture",
      "Suitable for sensitive skin"
    ]
  },
  {
    id: 8,
    name: "Babe Depigment Intensive Serum 30ml",
    brand: "Babe",
    category: "Whitening",
    skinType: ["All Skin Types"],
    concerns: ["dark spots", "uneven skin tone"],
    description: "Professional-grade brightening serum",
    imageUrl: "depigment-serum.jpg",
    size: "30 ml",
    priceRange: '$$$',
    keyIngredients: ["4-Butylresorcinol", "Niacinamide", "Ferulic Acid"],
    bestFor: "Stubborn pigmentation",
    keyBenefits: [
      "86% reduction in dark spots in 56 days",
      "Dermatologist tested",
      "Non-irritating formula"
    ]
  },
  {
    id: 9,
    name: "Babe Super Fluid Mattifying Sunscreen SPF50 50ml",
    brand: "Babe",
    category: "Sunscreen",
    skinType: ["Oily", "Combination"],
    concerns: ["sun protection", "large pores", "shiny appearance"],
    description: "Oil-control sunscreen with matte finish",
    imageUrl: "matt-sunscreen.jpg",
    size: "50 ml",
    priceRange: '$$',
    keyIngredients: ["Octinoxate", "Zinc Oxide", "Silica"],
    bestFor: "Oily and combination skin types",
    keyBenefits: [
      "Controls shine for 8+ hours",
      "Minimizes pores appearance",
      "Non-comedogenic formula"
    ]
  },
  {
    id: 10,
    name: "Topicrem Ac Anti Blemish Care 40ml",
    brand: "Topicrem",
    category: "Treatment",
    skinType: ["Oily", "Combination"],
    concerns: ["acne", "acne marks", "blackheads"],
    description: "Complete acne treatment system",
    imageUrl: "acne-treatment.jpg",
    size: "40 ml",
    priceRange: '$$',
    keyIngredients: ["Salicylic Acid", "Zinc", "Niacinamide"],
    bestFor: "Mild to moderate acne",
    keyBenefits: [
      "Reduces active breakouts",
      "Fades post-acne marks",
      "Prevents new blemishes"
    ]
  },
  {
    id: 11,
    name: "Topicrem Ac Matifying Care 40ml",
    brand: "Topicrem",
    category: "Moisturizer",
    skinType: ["Oily", "Combination"],
    concerns: ["oily skin", "large pores", "shiny appearance"],
    description: "Oil-free mattifying moisturizer",
    imageUrl: "matt-moisturizer.jpg",
    size: "40 ml",
    priceRange: '$$',
    keyIngredients: ["Sebum-regulating Complex", "Hyaluronic Acid", "Zinc"],
    bestFor: "Oily and acne-prone skin",
    keyBenefits: [
      "8-hour shine control",
      "Non-comedogenic hydration",
      "Minimizes pores appearance"
    ]
  },
  {
    id: 12,
    name: "Topicrem Ac Purifying Cleansing Gel 200ml",
    brand: "Topicrem",
    category: "Cleanser",
    skinType: ["Oily", "Combination"],
    concerns: ["oily skin", "large pores", "shiny appearance"],
    description: "Deep cleansing gel for oily skin",
    imageUrl: "purifying-cleanser.jpg",
    size: "200 ml",
    priceRange: '$',
    keyIngredients: ["Zinc PCA", "Tea Tree Extract", "Salicylic Acid"],
    bestFor: "Daily cleansing for acne-prone skin",
    keyBenefits: [
      "Removes excess oil without stripping",
      "Helps prevent breakouts",
      "Refines pores"
    ]
  },
  {
    id: 13,
    name: "Topicrem DA Emollient Balm 200ml",
    brand: "Topicrem",
    category: "Moisturizer",
    skinType: ["Dry", "Very Dry"],
    concerns: ["Atopic dermatitis", "very dry skin"],
    description: "Intensive treatment for atopic dermatitis",
    imageUrl: "emollient-balm.jpg",
    size: "200 ml",
    priceRange: '$$',
    keyIngredients: ["Omega-6 Fatty Acids", "Ceramides", "Cholesterol"],
    bestFor: "Extremely dry, irritated skin",
    keyBenefits: [
      "Repairs skin barrier in 7 days",
      "Soothes itching and redness",
      "Dermatologist-recommended for eczema"
    ]
  },
  {
    id: 14,
    name: "Topicrem DA Ultra Rich Cleansing Gel 500ml",
    brand: "Topicrem",
    category: "Cleanser",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin", "skin irritation", "itching"],
    description: "Gentle cleanser for sensitive, dry skin",
    imageUrl: "rich-cleanser.jpg",
    size: "500 ml",
    priceRange: '$',
    keyIngredients: ["Mild Surfactants", "Glycerin", "Allantoin"],
    bestFor: "Daily cleansing without stripping moisture",
    keyBenefits: [
      "pH-balanced formula",
      "Soothes while cleansing",
      "Leaves skin soft not tight"
    ]
  },
  {
    id: 15,
    name: "Topicrem Cica Soothing Cream 100ml",
    brand: "Topicrem",
    category: "Healing",
    skinType: ["All Skin Types"],
    concerns: ["first grade burns", "sun burns", "skin irritation", "post laser"],
    description: "Emergency soothing cream for irritated skin",
    imageUrl: "cica-cream.jpg",
    size: "100 ml",
    priceRange: '$$',
    keyIngredients: ["Madecassoside", "Panthenol", "Copper-Zinc Complex"],
    bestFor: "Post-procedure and damaged skin",
    keyBenefits: [
      "Reduces irritation by 90% in 5 minutes",
      "Accelerates healing process",
      "Sterile, preservative-free formula"
    ]
  },
  {
    id: 16,
    name: "Topicrem Gentle Cleansing Gel 200ml",
    brand: "Topicrem",
    category: "Cleanser",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin cleansing"],
    description: "Mild cleanser for dry and sensitive skin",
    imageUrl: "gentle-cleanser.jpg",
    size: "200 ml",
    priceRange: '$',
    keyIngredients: ["Mild Surfactants", "Glycerin", "Bisabolol"],
    bestFor: "Daily gentle cleansing",
    keyBenefits: [
      "Maintains skin's natural moisture",
      "No soap, no alcohol",
      "Ideal for morning cleansing"
    ]
  },
  {
    id: 17,
    name: "Topicrem Gentle Micellar Water 200ml",
    brand: "Topicrem",
    category: "Cleanser",
    skinType: ["All Skin Types"],
    concerns: ["Makeup removal"],
    description: "All-in-one makeup remover and cleanser",
    imageUrl: "micellar-water.jpg",
    size: "200 ml",
    priceRange: '$',
    keyIngredients: ["Micellar Technology", "Glycerin", "Panthenol"],
    bestFor: "Quick and effective makeup removal",
    keyBenefits: [
      "Removes waterproof makeup",
      "No rinsing required",
      "Suitable for sensitive eyes"
    ]
  },
  {
    id: 18,
    name: "Topicrem Gentle Scrub 200ml",
    brand: "Topicrem",
    category: "Cleanser",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin cleansing"],
    description: "Gentle exfoliator with hydrating benefits",
    imageUrl: "gentle-scrub.jpg",
    size: "200 ml",
    priceRange: '$',
    keyIngredients: ["Jojoba Beads", "Glycerin", "Bisabolol"],
    bestFor: "Weekly exfoliation of dry skin",
    keyBenefits: [
      "Removes dead skin cells without irritation",
      "Provides 24-hour hydration",
      "Leaves skin smooth and radiant"
    ]
  },
  {
    id: 19,
    name: "Topicrem Hydra Light Moisturizing Radiance Cream 40ml",
    brand: "Topicrem",
    category: "Moisturizer",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin", "lack of radiance"],
    description: "Day cream for hydration and glow",
    imageUrl: "radiance-cream.jpg",
    size: "40 ml",
    priceRange: '$$',
    keyIngredients: ["Hyaluronic Acid", "Vitamin CG", "Illuminating Pigments"],
    bestFor: "Dull, dehydrated skin",
    keyBenefits: [
      "Instant radiant glow",
      "72-hour hydration",
      "Lightweight non-greasy texture"
    ]
  },
  {
    id: 20,
    name: "Topicrem Mela Booster Serum 30ml",
    brand: "Topicrem",
    category: "Whitening",
    skinType: ["All Skin Types"],
    concerns: ["dark spots", "uneven skin tone"],
    description: "Professional-grade brightening serum",
    imageUrl: "mela-serum.jpg",
    size: "30 ml",
    priceRange: '$$$',
    keyIngredients: ["Tranexamic Acid", "Niacinamide", "Alpha-Arbutin"],
    bestFor: "Stubborn pigmentation and melasma",
    keyBenefits: [
      "Clinically proven to reduce dark spots",
      "Prevents pigment recurrence",
      "Safe for long-term use"
    ]
  },
  {
    id: 21,
    name: "Topicrem Radiance Eye Contour 15ml",
    brand: "Topicrem",
    category: "Eye Care",
    skinType: ["All Skin Types"],
    concerns: ["dark circles", "puffiness", "eye wrinkles"],
    description: "Targeted treatment for eye area concerns",
    imageUrl: "eye-contour.jpg",
    size: "15 ml",
    priceRange: '$$',
    keyIngredients: ["Caffeine", "Vitamin K", "Hyaluronic Acid"],
    bestFor: "Tired-looking eyes",
    keyBenefits: [
      "Reduces dark circles in 4 weeks",
      "De-puffs eye area instantly",
      "Diminishes fine lines"
    ]
  },
  {
    id: 22,
    name: "Topicrem Ultra Moisturizing Body Milk 500ml",
    brand: "Topicrem",
    category: "Body Care",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin"],
    description: "Intensive body moisturizer",
    imageUrl: "body-milk.jpg",
    size: "500 ml",
    priceRange: '$',
    keyIngredients: ["Shea Butter", "Glycerin", "Ceramides"],
    bestFor: "Dry body skin",
    keyBenefits: [
      "24-hour hydration",
      "Lightweight fast-absorbing formula",
      "Improves skin elasticity"
    ]
  },
  {
    id: 23,
    name: "Topicrem Ultra Moisturizing Lip Balm 4gr",
    brand: "Topicrem",
    category: "Lip Care",
    skinType: ["All Skin Types"],
    concerns: ["dry lips"],
    description: "Reparative lip treatment",
    imageUrl: "lip-balm.jpg",
    size: "4 g",
    priceRange: '$',
    keyIngredients: ["Beeswax", "Shea Butter", "Vitamin E"],
    bestFor: "Chapped, cracked lips",
    keyBenefits: [
      "Provides immediate relief",
      "Long-lasting protection",
      "Smooth application"
    ]
  },
  {
    id: 24,
    name: "Topicrem Ultra Moisturizing Hand Cream 50ml",
    brand: "Topicrem",
    category: "Hand Care",
    skinType: ["Dry", "Normal"],
    concerns: ["dryness"],
    description: "Intensive hand repair cream",
    imageUrl: "hand-cream.jpg",
    size: "50 ml",
    priceRange: '$',
    keyIngredients: ["Urea", "Glycerin", "Allantoin"],
    bestFor: "Dry, over-washed hands",
    keyBenefits: [
      "Repairs cracked skin",
      "Non-greasy formula",
      "Protects against irritants"
    ]
  },
  {
    id: 25,
    name: "Topicrem UR10 Anti-Roughness Smoothing Cream 500ml",
    brand: "Topicrem",
    category: "Body Care",
    skinType: ["Dry", "Very Dry"],
    concerns: ["rough skin", "very dry skin"],
    description: "Extreme dryness treatment",
    imageUrl: "ur10-cream.jpg",
    size: "500 ml",
    priceRange: '$$',
    keyIngredients: ["Urea 10%", "Ceramides", "Omega Fatty Acids"],
    bestFor: "Keratosis pilaris and rough skin",
    keyBenefits: [
      "Smooths skin texture in 1 week",
      "Exfoliates and hydrates",
      "Dermatologist-tested"
    ]
  },
  {
    id: 26,
    name: "Topicrem Foot Cream 75ml",
    brand: "Topicrem",
    category: "Foot Care",
    skinType: ["All Skin Types"],
    concerns: ["dry skin"],
    description: "Specialized foot moisturizer",
    imageUrl: "foot-cream.jpg",
    size: "75 ml",
    priceRange: '$',
    keyIngredients: ["Urea", "Tea Tree Oil", "Menthol"],
    bestFor: "Dry, cracked feet",
    keyBenefits: [
      "Repairs heel cracks",
      "Cooling sensation",
      "Antifungal properties"
    ]
  },
  {
    id: 27,
    name: "Martiderm Anti-Sebum Anti-Hair Loss Shampoo 200ml",
    brand: "Martiderm",
    category: "Hair Care",
    skinType: ["Oily", "Combination"],
    concerns: ["dandruff"],
    description: "Clarifying scalp treatment shampoo",
    imageUrl: "anti-sebum-shampoo.jpg",
    size: "200 ml",
    priceRange: '$$',
    keyIngredients: ["Piroctone Olamine", "Niacinamide", "Zinc"],
    bestFor: "Oily scalp and thinning hair",
    keyBenefits: [
      "Reduces excess sebum",
      "Strengthens hair roots",
      "Controls flaking"
    ]
  },
  {
    id: 28,
    name: "Babe Aloe Vera 300ml",
    brand: "Babe",
    category: "Moisturizer",
    skinType: ["All Skin Types"],
    concerns: ["sun burns", "skin irritation", "post laser"],
    description: "Soothing after-sun treatment",
    imageUrl: "aloe-vera.jpg",
    size: "300 ml",
    priceRange: '$',
    keyIngredients: ["Aloe Vera 99%", "Allantoin", "Panthenol"],
    bestFor: "Sun-damaged and irritated skin",
    keyBenefits: [
      "Instant cooling relief",
      "Reduces redness and inflammation",
      "Promotes healing"
    ]
  },
  {
    id: 29,
    name: "Babe Facial Sunscreen Super Fluid SPF50 50ml",
    brand: "Babe",
    category: "Sunscreen",
    skinType: ["All Skin Types"],
    concerns: ["sun protection"],
    description: "Lightweight facial sunscreen",
    imageUrl: "sunscreen.jpg",
    size: "50 ml",
    priceRange: '$$',
    keyIngredients: ["Octinoxate", "Titanium Dioxide", "Antioxidants"],
    bestFor: "Daily facial sun protection",
    keyBenefits: [
      "SPF 50+ broad spectrum",
      "Absorbs quickly without white cast",
      "Works under makeup"
    ]
  },
  {
    id: 30,
    name: "Babe Facial Sunscreen Super Fluid Color SPF50 50ml",
    brand: "Babe",
    category: "Sunscreen",
    skinType: ["All Skin Types"],
    concerns: ["sun protection"],
    description: "Tinted facial sunscreen",
    imageUrl: "tinted-sunscreen.jpg",
    size: "50 ml",
    priceRange: '$$',
    keyIngredients: ["Octinoxate", "Iron Oxides", "Niacinamide"],
    bestFor: "Sun protection with light coverage",
    keyBenefits: [
      "SPF 50+ with universal tint",
      "Blurs imperfections",
      "Replaces makeup primer"
    ]
  },
  {
    id: 31,
    name: "Babe Hand Cream 50ml",
    brand: "Babe",
    category: "Hand Care",
    skinType: ["All Skin Types"],
    concerns: ["dryness"],
    description: "Daily hand moisturizer",
    imageUrl: "hand-cream.jpg",
    size: "50 ml",
    priceRange: '$',
    keyIngredients: ["Glycerin", "Shea Butter", "Vitamin E"],
    bestFor: "Dry hands needing frequent application",
    keyBenefits: [
      "Fast absorption",
      "Non-greasy finish",
      "Protects against environmental damage"
    ]
  },
  {
    id: 32,
    name: "Babe Lip Care Stick SPF20 4g",
    brand: "Babe",
    category: "Lip Care",
    skinType: ["All Skin Types"],
    concerns: ["dry lips"],
    description: "Protective lip balm with SPF",
    imageUrl: "lip-balm-spf.jpg",
    size: "4 g",
    priceRange: '$',
    keyIngredients: ["Beeswax", "Octinoxate", "Vitamin E"],
    bestFor: "Sun protection for lips",
    keyBenefits: [
      "Prevents sun-induced dryness",
      "SPF 20 protection",
      "Conditions while protecting"
    ]
  },
  {
    id: 33,
    name: "Babe Soothing Micellar Gel 245ml",
    brand: "Babe",
    category: "Cleanser",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin cleansing"],
    description: "Gentle micellar cleansing gel",
    imageUrl: "micellar-gel.jpg",
    size: "245 ml",
    priceRange: '$',
    keyIngredients: ["Micellar Technology", "Glycerin", "Bisabolol"],
    bestFor: "Dry and sensitive skin cleansing",
    keyBenefits: [
      "Removes impurities without water",
      "Maintains skin's moisture barrier",
      "Soothes while cleansing"
    ]
  },
  {
    id: 34,
    name: "Babe Stop Akn Astringent Tonic Lotion 250ml",
    brand: "Babe",
    category: "Treatment",
    skinType: ["Oily", "Combination"],
    concerns: ["acne", "acne marks", "blackheads"],
    description: "Clarifying acne treatment toner",
    imageUrl: "astringent-tonic.jpg",
    size: "250 ml",
    priceRange: '$',
    keyIngredients: ["Salicylic Acid", "Zinc", "Witch Hazel"],
    bestFor: "Oily and acne-prone skin",
    keyBenefits: [
      "Reduces excess oil",
      "Minimizes pores",
      "Prevents new breakouts"
    ]
  },
  {
    id: 35,
    name: "Babe Stop Akn Mattifying Moisturiser 50ml",
    brand: "Babe",
    category: "Moisturizer",
    skinType: ["Oily", "Combination"],
    concerns: ["oily skin", "large pores", "shiny appearance"],
    description: "Oil-control facial moisturizer",
    imageUrl: "matt-moisturizer.jpg",
    size: "50 ml",
    priceRange: '$$',
    keyIngredients: ["Niacinamide", "Zinc PCA", "Sebum-regulating Complex"],
    bestFor: "Oily skin needing hydration",
    keyBenefits: [
      "8-hour shine control",
      "Lightweight gel-cream texture",
      "Non-comedogenic"
    ]
  },
  {
    id: 36,
    name: "Babe Stop Akn Purifying Cleansing Gel 200ml",
    brand: "Babe",
    category: "Cleanser",
    skinType: ["Oily", "Combination"],
    concerns: ["acne", "acne marks", "blackheads"],
    description: "Deep cleansing gel for acne-prone skin",
    imageUrl: "purifying-cleanser.jpg",
    size: "200 ml",
    priceRange: '$',
    keyIngredients: ["Salicylic Acid", "Tea Tree Oil", "Zinc"],
    bestFor: "Daily acne prevention",
    keyBenefits: [
      "Reduces existing breakouts",
      "Prevents new blemishes",
      "Refines skin texture"
    ]
  },
  {
    id: 37,
    name: "Babe Stop Akn Spot Control Gel 8ml",
    brand: "Babe",
    category: "Treatment",
    skinType: ["Oily", "Combination"],
    concerns: ["acne"],
    description: "Targeted acne spot treatment",
    imageUrl: "spot-treatment.jpg",
    size: "8 ml",
    priceRange: '$',
    keyIngredients: ["Niacinamide", "Zinc", "Salicylic Acid"],
    bestFor: "Individual acne lesions",
    keyBenefits: [
      "Reduces pimple size overnight",
      "Calms inflammation",
      "Prevents scarring"
    ]
  },
  {
    id: 38,
    name: "Babe Lip Repairing Cream",
    brand: "Babe",
    category: "Lip Care",
    skinType: ["All Skin Types"],
    concerns: ["dry lips"],
    description: "Intensive lip repair treatment",
    imageUrl: "lip-repair.jpg",
    size: "4 g",
    priceRange: '$',
    keyIngredients: ["Lanolin", "Ceramides", "Panthenol"],
    bestFor: "Severely chapped lips",
    keyBenefits: [
      "Repairs cracked lips",
      "Overnight intensive treatment",
      "Creates protective barrier"
    ]
  },
  {
    id: 39,
    name: "Babe SOS Soothing Spray 125ml",
    brand: "Babe",
    category: "Healing",
    skinType: ["All Skin Types"],
    concerns: ["first grade burns", "sun burns", "skin irritation"],
    description: "Emergency skin soothing spray",
    imageUrl: "soothing-spray.jpg",
    size: "125 ml",
    priceRange: '$',
    keyIngredients: ["Thermal Spring Water", "Copper-Zinc", "Panthenol"],
    bestFor: "Immediate relief for irritated skin",
    keyBenefits: [
      "Cools and soothes instantly",
      "Reduces redness",
      "Accelerates healing"
    ]
  },
  {
    id: 40,
    name: "Martiderm DSP Bright 30 Amp 2ml",
    brand: "Martiderm",
    category: "Whitening",
    skinType: ["All Skin Types"],
    concerns: ["dark spots", "uneven skin tone"],
    description: "Concentrated brightening ampoules",
    imageUrl: "bright-ampoules.jpg",
    size: "30 ampoules (2ml each)",
    priceRange: '$$$',
    keyIngredients: ["Tranexamic Acid", "Niacinamide", "Vitamin C"],
    bestFor: "Stubborn pigmentation",
    keyBenefits: [
      "Reduces dark spots in 4 weeks",
      "Improves skin luminosity",
      "Antioxidant protection"
    ]
  },
  {
    id: 41,
    name: "Martiderm Proteum Serum Smart Aging Intensive 30ml",
    brand: "Martiderm",
    category: "Anti-Aging",
    skinType: ["All Skin Types"],
    concerns: ["wrinkles", "saggy skin"],
    description: "Advanced anti-aging serum",
    imageUrl: "anti-aging-serum.jpg",
    size: "30 ml",
    priceRange: '$$$',
    keyIngredients: ["Proteoglycans", "Growth Factors", "Hyaluronic Acid"],
    bestFor: "Mature skin needing firming",
    keyBenefits: [
      "Reduces deep wrinkles",
      "Improves skin density",
      "Boosts collagen production"
    ]
  },
  {
    id: 42,
    name: "Martiderm Acniover Serum 30ml",
    brand: "Martiderm",
    category: "Treatment",
    skinType: ["Oily", "Combination"],
    concerns: ["acne", "acne marks", "blackheads"],
    description: "Complete acne treatment serum",
    imageUrl: "acniover-serum.jpg",
    size: "30 ml",
    priceRange: '$$',
    keyIngredients: ["Retinol", "Niacinamide", "Zinc"],
    bestFor: "Adult acne and breakouts",
    keyBenefits: [
      "Unclogs pores",
      "Fades post-acne marks",
      "Regulates sebum production"
    ]
  },
  {
    id: 43,
    name: "Martiderm Acniover Gel Purificante 200ml",
    brand: "Martiderm",
    category: "Cleanser",
    skinType: ["Oily", "Combination"],
    concerns: ["acne", "acne marks", "blackheads"],
    description: "Purifying acne treatment cleanser",
    imageUrl: "acniover-cleanser.jpg",
    size: "200 ml",
    priceRange: '$',
    keyIngredients: ["Salicylic Acid", "Zinc", "Tea Tree Oil"],
    bestFor: "Acne-prone skin cleansing",
    keyBenefits: [
      "Reduces existing breakouts",
      "Prevents new blemishes",
      "Mattifies skin"
    ]
  },
  {
    id: 44,
    name: "Babe Hydrating Body Milk for Dry Sensitive Skin 500ml",
    brand: "Babe",
    category: "Body Care",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin"],
    description: "Soothing body moisturizer for sensitive skin",
    imageUrl: "hydrating-body-milk.jpg",
    size: "500 ml",
    priceRange: '$',
    keyIngredients: ["Oat Extract", "Ceramides", "Glycerin"],
    bestFor: "Dry, sensitive body skin",
    keyBenefits: [
      "24-hour hydration",
      "Fragrance-free formula",
      "Strengthens skin barrier"
    ]
  },
  {
    id: 45,
    name: "Martiderm Acniover Active Cremigel 40ml",
    brand: "Martiderm",
    category: "Treatment",
    skinType: ["Oily", "Combination"],
    concerns: ["acne", "acne marks", "blackheads"],
    description: "Targeted acne treatment gel",
    imageUrl: "acniover-gel.jpg",
    size: "40 ml",
    priceRange: '$$',
    keyIngredients: ["Niacinamide", "Zinc", "Salicylic Acid"],
    bestFor: "Localized acne treatment",
    keyBenefits: [
      "Reduces inflammation quickly",
      "Prevents new breakouts",
      "Lightweight texture"
    ]
  },
  {
    id: 46,
    name: "Martiderm DSP Cream FPS50+ 40ml",
    brand: "Martiderm",
    category: "Sunscreen",
    skinType: ["All Skin Types"],
    concerns: ["sun protection", "dark spots"],
    description: "Brightening daily sunscreen",
    imageUrl: "dsp-sunscreen.jpg",
    size: "40 ml",
    priceRange: '$$',
    keyIngredients: ["Tinosorb S", "Niacinamide", "Vitamin E"],
    bestFor: "Sun protection with brightening benefits",
    keyBenefits: [
      "SPF 50+ broad spectrum",
      "Helps fade dark spots",
      "Antioxidant protection"
    ]
  },
  {
    id: 47,
    name: "Babe Body Oil Soap for Dry Skin 500ml",
    brand: "Babe",
    category: "Cleanser",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin"],
    description: "Nourishing oil-based cleanser",
    imageUrl: "oil-soap.jpg",
    size: "500 ml",
    priceRange: '$',
    keyIngredients: ["Olive Oil", "Almond Oil", "Glycerin"],
    bestFor: "Dry skin needing gentle cleansing",
    keyBenefits: [
      "Cleanses without stripping",
      "Leaves skin soft and supple",
      "Maintains moisture barrier"
    ]
  },
  {
    id: 48,
    name: "Martiderm Photo-Age 10 Ampoules",
    brand: "Martiderm",
    category: "Anti-Aging",
    skinType: ["All Skin Types"],
    concerns: ["wrinkles", "lack of radiance"],
    description: "Anti-aging photoprotection ampoules",
    imageUrl: "photo-age.jpg",
    size: "10 ampoules (2ml each)",
    priceRange: '$$$',
    keyIngredients: ["Vitamin C", "Ferulic Acid", "Proteoglycans"],
    bestFor: "Sun-damaged and aging skin",
    keyBenefits: [
      "Reduces visible sun damage",
      "Improves skin firmness",
      "Boosts radiance"
    ]
  },
  {
    id: 49,
    name: "Martiderm Night Renew 10 Ampoules",
    brand: "Martiderm",
    category: "Anti-Aging",
    skinType: ["All Skin Types"],
    concerns: ["dark spots", "wrinkles"],
    description: "Overnight renewal treatment",
    imageUrl: "night-renew.jpg",
    size: "10 ampoules (2ml each)",
    priceRange: '$$$',
    keyIngredients: ["Retinol", "Hyaluronic Acid", "Glycolic Acid"],
    bestFor: "Nighttime skin renewal",
    keyBenefits: [
      "Accelerates cell turnover",
      "Reduces appearance of wrinkles",
      "Improves skin texture"
    ]
  },
  {
    id: 50,
    name: "Babe Hydrating Body Wash 500ml",
    brand: "Babe",
    category: "Cleanser",
    skinType: ["Dry", "Normal"],
    concerns: ["dry skin"],
    description: "Moisturizing shower gel",
    imageUrl: "hydrating-wash.jpg",
    size: "500 ml",
    priceRange: '$',
    keyIngredients: ["Glycerin", "Niacinamide", "Panthenol"],
    bestFor: "Dry skin cleansing",
    keyBenefits: [
      "Cleanses without drying",
      "Maintains skin's moisture",
      "Soap-free formula"
    ]
  },
  {
    id: 51,
    name: "Martiderm Expression Gel Eye and Lip 15ml",
    brand: "Martiderm",
    category: "Anti-Aging",
    skinType: ["All Skin Types"],
    concerns: ["expression lines"],
    description: "Targeted treatment for dynamic wrinkles",
    imageUrl: "expression-gel.jpg",
    size: "15 ml",
    priceRange: '$$',
    keyIngredients: ["Argireline", "Hyaluronic Acid", "Matrixyl"],
    bestFor: "Crow's feet and lip lines",
    keyBenefits: [
      "Relaxes expression lines",
      "Plumps fine wrinkles",
      "Lightweight gel texture"
    ]
  },
  {
    id: 52,
    name: "Martiderm Flash 5 Ampoules",
    brand: "Martiderm",
    category: "Anti-Aging",
    skinType: ["All Skin Types"],
    concerns: ["lack of radiance", "wrinkles"],
    description: "Instant radiance boost treatment",
    imageUrl: "flash-ampoules.jpg",
    size: "5 ampoules (2ml each)",
    priceRange: '$$',
    keyIngredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid"],
    bestFor: "Special occasion skin prep",
    keyBenefits: [
      "Instant glow effect",
      "Reduces visible fatigue signs",
      "Plumps skin temporarily"
    ]
  },
  {
    id: 53,
    name: "Martiderm Proteos Hydra Plus SP 10 Ampoules",
    brand: "Martiderm",
    category: "Anti-Aging",
    skinType: ["Dry", "Normal"],
    concerns: ["wrinkles", "dryness"],
    description: "Intensive hydration and anti-aging treatment",
    imageUrl: "hydra-ampoules.jpg",
    size: "10 ampoules (2ml each)",
    priceRange: '$$$',
    keyIngredients: ["Proteoglycans", "Hyaluronic Acid", "Vitamin E"],
    bestFor: "Mature and dehydrated skin",
    keyBenefits: [
      "Reduces deep wrinkles in 4 weeks",
      "Intense 72-hour hydration",
      "Improves skin elasticity"
    ]
  },
  {
    id: 54,
    name: "Martiderm DSP Serum Iluminador 30ml",
    brand: "Martiderm",
    category: "Anti-Aging",
    skinType: ["All Skin Types"],
    concerns: ["dark spots", "uneven skin tone"],
    description: "Brightening anti-aging serum",
    imageUrl: "dsp-serum.jpg",
    size: "30 ml",
    priceRange: '$$$',
    keyIngredients: ["Tranexamic Acid", "Niacinamide", "Vitamin C"],
    bestFor: "Age spots and sun damage",
    keyBenefits: [
      "Reduces pigmentation by 60% in 8 weeks",
      "Improves skin radiance",
      "Antioxidant protection"
    ]
  }
]

const skinTypes = ['Dry', 'Oily', 'Combination', 'Normal', 'Sensitive'];

const commonConcerns = [
  'Acne', 
  'Dark Spots', 
  'Wrinkles', 
  'Redness',
  'Dryness', 
  'Oiliness', 
  'Sensitivity', 
  'Dullness',
  'Large Pores',
  'Dark Circles'
];

const categories = [
  'Moisturizer', 'Deodorant', 'Treatment', 'Sunscreen',
  'Whitening', 'Cleanser', 'Healing', 'Eye Care',
  'Body Care', 'Lip Care', 'Hand Care', 'Foot Care',
  'Hair Care', 'Anti-Aging'
];

// Utility functions
const getProductById = (id) => products.find(product => product.id === id);

const getProductsByCategory = (category) => 
  products.filter(p => p.category.toLowerCase() === category.toLowerCase());

const getProductsBySkinType = (skinType) => 
  products.filter(p => p.skinType.includes(skinType) || p.skinType.includes('All Skin Types'));

const getProductsByConcerns = (concerns) => 
  products.filter(p => concerns.some(c => p.concerns.some(pc => pc.toLowerCase().includes(c.toLowerCase()))));

const searchProducts = (query) => {
  const q = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.concerns.some(c => c.toLowerCase().includes(q)) ||
    p.keyIngredients.some(i => i.toLowerCase().includes(q))
  );
};

export {
  products,
  skinTypes,
  commonConcerns,
  categories,
  getProductById,
  getProductsByCategory,
  getProductsBySkinType,
  getProductsByConcerns,
  searchProducts
};


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 05</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class="bg-[url(assets/img/wallpaper.jpg)]">

    <header class="bg-sky-400 bg-opacity-5 text-black shadow-lg hidden md:block border-b-4 border-black px-4">
        <div class="container mx-auto flex items-center h-24">
            <a href="/" class="flex items-center justify-center">
                <img class="h-16" src="assets/img/Feastables_Rebrand_Non_Tilted.avif" alt="Logo" />
                <span class="ml-4 uppercase font-black"></span>
            </a>
            <nav class="contents font-semibold text-base lg:text-lg">
                <ul class="mx-auto flex items-center">
                    <li class="p-5 xl:p-8 active">
                        <a href="/">
                            <span class="text-xl italic">Shop</span>
                        </a>
                    </li>
                    <li class="p-5 xl:p-8">
                        <a href="/">
                            <span class="text-xl italic">Our story</span>
                        </a>
                    </li>
                    <li class="p-5 xl:p-8">
                        <a href="/">
                            <span class="text-xl italic">Ethical sourcing</span>
                        </a>
                    </li>
                    <li class="p-5 xl:p-8">
                        <a href="/">
                            <span class="text-xl italic">Available Worldwide</span>
                        </a>
                    </li>
                </ul>
                <ul class="list-none flex items-center gap-x-3">
                    <li class="group chatbot-item relative">
                        <button title="Open Feastables Chat" type="button" aria-label="Open Feastables Chat">
                            <span class="sr-only">Open Feastables Chat</span>
                            <span class="text-blue-cloud">
                                <svg class="icon icon--help group w-[35px] h-[35px] hover:drop-shadow-[1px_2px_0_#000000] mt-[5px] text-current" aria-hidden="true">
                                    <use xlink:href="#help" class="w-[35px] h-[35px] text-current group:fill-inherit group:stroke-inherit" />
                                </svg>
                            </span>
                        </button>
                    </li>
                    <li class="group country-selector-item relative">
                        <div class="localization-form text-black flex items-center relative">
                            <div>
                                <button type="button" title="Select Country (UNITED STATES)" class="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:drop-shadow-[2px_2px_0_#000000]">
                                    <img class="w-[28px] h-[28px] rounded-full object-cover object-center" src="//feastables.com/cdn/shop/files/Flag-United-States-of-America.webp?v=1683068544&amp;width=60" srcset="//feastables.com/cdn/shop/files/Flag-United-States-of-America.webp?v=1683068544&amp;width=60, //feastables.com/cdn/shop/files/Flag-United-States-of-America.webp?v=1683068544&amp;width=120 2x" alt="Flag: UNITED STATES" width="800" height="416" loading="lazy">
                                    <span class="sr-only bg-white text-black">UNITED STATES (US )</span>
                                </button>
                                <div class="submenu container absolute z-[100] top-full left-1/2 -translate-x-1/2 hidden group-focus-within:block">
                                    <ul class="absolute w-max top-0 right-0 bg-blue-cloud border-2 border-black">
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="UNITED STATES" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/Flag-United-States-of-America.webp?v=1683068544&amp;width=32" alt="Flag: UNITED STATES" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                UNITED STATES </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="UNITED KINGDOM" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/download.png?v=1683068527&amp;width=32" alt="Flag: UNITED KINGDOM" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                UNITED KINGDOM </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="IRELAND" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/640px-Flag_of_Ireland_svg.png?v=1741454450&amp;width=32" alt="Flag: IRELAND" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                IRELAND </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="GERMANY" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/Flag-Germany_1.jpg?v=1741454538&amp;width=32" alt="Flag: GERMANY" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                GERMANY </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="AUSTRIA" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/640px-Flag_of_Austria_svg.png?v=1741454483&amp;width=32" alt="Flag: AUSTRIA" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                AUSTRIA </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="FRANCE" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/640px-Flag_of_France_svg.png?v=1741454550&amp;width=32" alt="Flag: FRANCE" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                FRANCE </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="SPAIN" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/640px-Flag_of_Spain_svg.png?v=1741454568&amp;width=32" alt="Flag: SPAIN" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                SPAIN </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="AUSTRALIA" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/Flag-Australia.webp?v=1689806978&amp;width=32" alt="Flag: AUSTRALIA" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                AUSTRALIA </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="group account-item relative hover:drop-shadow-[2px_2px_0_#000000] transition ease-in duration-100">
                        <a href="index.php" title="My Account">
                            <span class="sr-only bg-black text-white">My Account</span>
                            <svg class="icon icon--face-happy group w-[35px] h-[35px] text-current" aria-hidden="true">
                                <use xlink:href="#face-happy" class="w-[35px] h-[35px] text-current group:fill-inherit group:stroke-inherit" />
                            </svg>
                        </a>
                    </li>
                    <li class="group store-locator-item relative hover:drop-shadow-[2px_2px_0_#000000] transition ease-in duration-100">
                        <a href="index.php" title="Find A Store">
                            <span class="sr-only bg-black text-white">Find A Store</span>
                            <svg class="icon icon--map-pin group w-[35px] h-[35px] text-current" aria-hidden="true">
                                <use xlink:href="#map-pin" class="w-[35px] h-[35px] text-current group:fill-inherit group:stroke-inherit" />
                            </svg>
                        </a>
                    </li>
                    <li class="cart-item relative">
                        <button class="relative inline-block group" aria-label="Open My Bag" title="Open My Bag">
                            <svg class="icon icon--bag group w-10 h-10 group-hover:drop-shadow-[2px_1px_0_#000000] text-current" aria-hidden="true">
                                <use xlink:href="#bag" class="w-10 h-10 group-hover:drop-shadow-[2px_1px_0_#000000] text-current group:fill-inherit group:stroke-inherit" />
                            </svg>
                            <span class="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold italic text-black">0</span>
                        </button>
                        <svg style="display:none;" aria-hidden="true">
                            <symbol id="help" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </symbol>
                            <symbol id="face-happy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 15s1.5 2 4 2 4-2 4-2" />
                                <line x1="9" y1="9" x2="9.01" y2="9" />
                                <line x1="15" y1="9" x2="15.01" y2="9" />
                            </symbol>
                            <symbol id="map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 21c-4.418 0-8-7.163-8-10a8 8 0 1 1 16 0c0 2.837-3.582 10-8 10z" />
                                <circle cx="12" cy="11" r="3" />
                            </symbol>
                            <symbol id="bag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </symbol>
                        </svg>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <img src="assets/img/holiday-2025-hero-mobile_1.jpg" alt="" class="w-full max-w-screen-xl mx-auto border-4 border-black block mt-8 rounded-2xl">

    <li class="marquee-item marquee-item-html overflow-hidden shrink-0">
        <div class="text-multi-stroke-mid-gradient-mobile md:text-multi-stroke-mid-gradient font-black italic text-[color:var(--color)] text-[length:var(--font-size-mobile)] lg:text-[length:var(--font-size)]" style="
                  --font-size: 90px;
                  --font-size-mobile: 36px;
                  --color: #f2ece0;
                  --outer-stroke: 18px #000;
                  --inner-stroke: 3px #000;
                  --middle-stroke: 12px transparent;
                  --outer-stroke-mobile: 7px #000;
                  --inner-stroke-mobile: 1px #000;
                  --middle-stroke-mobile: 5px transparent;
                  --middle-stroke-gradient: linear-gradient(180deg, rgba(251, 82, 0, 1), rgba(93, 60, 114, 1) 100%)" data-content="TARGET">
            <span>TARGET</span>
        </div>
    </li>



</body>

</html>
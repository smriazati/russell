<template>
    <div class="default-layout-wrapper">
        <header>
            <h1>
                <NuxtLink to="/">Russell Favret</NuxtLink>
            </h1>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/watch">Watch</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <SiteFooter />
    </div>
</template>

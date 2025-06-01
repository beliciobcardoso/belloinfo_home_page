'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detecta rolagem para mudar a aparência do cabeçalho
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 w-full z-40 transition-all duration-200 ${isScrolled
                    ? 'bg-background/80 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2" prefetch={false}>
                        <span className="text-2xl font-bold">Bello<span className="text-primary">Info</span></span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link
                        href="#servicos"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        prefetch={false}
                    >
                        Serviços
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        prefetch={false}
                    >
                        Sobre
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        prefetch={false}
                    >
                        Blog
                    </Link>
                    <Link
                        href="#contato"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        prefetch={false}
                    >
                        Contato
                    </Link>
                    <Button size="sm" asChild>
                        <Link href="#contato" prefetch={false}>
                            Orçamento
                        </Link>
                    </Button>
                    <ThemeToggle />
                </nav>

                {/* Mobile Navigation Button */}
                <button
                    className="md:hidden flex items-center justify-center h-10 w-10 rounded-md"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    <Image
                        src={isMenuOpen ? "/close.svg" : "/menu.svg"}
                        width={24}
                        height={24}
                        alt={isMenuOpen ? "Fechar" : "Menu"}
                        aria-hidden="true"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-50 p-4">
                    <nav className="flex flex-col items-center gap-6 mt-8">
                        <Link
                            href="#servicos"
                            className="text-xl font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                            prefetch={false}
                        >
                            Serviços
                        </Link>
                        <Link
                            href="#"
                            className="text-xl font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                            prefetch={false}
                        >
                            Sobre
                        </Link>
                        <Link
                            href="#"
                            className="text-xl font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                            prefetch={false}
                        >
                            Blog
                        </Link>
                        <Link
                            href="#contato"
                            className="text-xl font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                            prefetch={false}
                        >
                            Contato
                        </Link>
                        <Button size="lg" className="mt-4" onClick={() => setIsMenuOpen(false)} asChild>
                            <Link href="#contato" prefetch={false}>
                                Orçamento
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

interface SlideProps {
  title: string;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, children }) => (
  <Card className="w-full h-full bg-card/90 shadow-lg backdrop-blur-sm border-border">
    <CardHeader>
      <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-card-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "生成AI活用入門",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center mb-8">情報系専門学校初学者向けカリキュラム</h2>
          <p className="text-center text-muted-foreground">2025年2月版</p>
        </div>
      )
    },
    {
      title: "1. カリキュラム概要",
      content: (
        <div className="space-y-4">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">目的</h3>
            <p className="text-muted-foreground">生成AIの基礎知識と実践スキルを習得</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">特徴</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-muted-foreground">実践重視 (演習、失敗体験の共有)</li>
              <li className="text-muted-foreground">能動的な学習を促進</li>
              <li className="text-muted-foreground">対象: 情報系専門学校生</li>
              <li className="text-muted-foreground">教育プロセス下地がないことを前提</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2. 教育目標",
      content: (
        <ul className="list-disc pl-6 space-y-3">
          <li className="text-muted-foreground">AIの基本原理と仕組みを理解</li>
          <li className="text-muted-foreground">効果的なプロンプト作成と問題解決</li>
          <li className="text-muted-foreground">AIツールの実践的活用方法の習得</li>
          <li className="text-muted-foreground">AIを活用した開発プロセスの理解</li>
          <li className="text-muted-foreground">倫理的配慮とAIの限界の認識</li>
        </ul>
      )
    },
    {
      title: "3. カリキュラム前期",
      content: (
        <div className="space-y-4">
          <p className="font-semibold mb-4 text-muted-foreground">AIとの対話と基礎概念</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-2 bg-muted rounded">
              <p className="font-medium">Week 1-5: AIの基礎と対話</p>
              <p className="text-sm text-muted-foreground">プロンプト、問題解決、情報整理</p>
            </div>
            <div className="p-2 bg-muted rounded">
              <p className="font-medium">Week 6-10: コード生成とGit</p>
              <p className="text-sm text-muted-foreground">テスト、リファクタリング、バージョン管理</p>
            </div>
            <div className="p-2 bg-muted rounded">
              <p className="font-medium">Week 11-15: Web基礎とAIリテラシー</p>
              <p className="text-sm text-muted-foreground">アーキテクチャ、倫理、著作権</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "4. カリキュラム後期",
      content: (
        <div className="space-y-4">
          <p className="font-semibold mb-4 text-muted-foreground">実践的活用とプロジェクト体験</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-2 bg-muted rounded">
              <p className="font-medium">Week 1-5: プロジェクト設計とAPI</p>
              <p className="text-sm text-muted-foreground">要件定義、データベース設計、API連携</p>
            </div>
            <div className="p-2 bg-muted rounded">
              <p className="font-medium">Week 6-10: 実践開発</p>
              <p className="text-sm text-muted-foreground">Webアプリ開発、クラウドデプロイ</p>
            </div>
            <div className="p-2 bg-muted rounded">
              <p className="font-medium">Week 11-15: 倫理と総まとめ</p>
              <p className="text-sm text-muted-foreground">情報モラル、最終発表、振り返り</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "5. 評価方法",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg text-center">
              <p className="font-bold text-lg mb-2">30%</p>
              <p className="text-sm text-muted-foreground">理解度テスト</p>
            </div>
            <div className="p-4 bg-muted rounded-lg text-center">
              <p className="font-bold text-lg mb-2">40%</p>
              <p className="text-sm text-muted-foreground">実践課題</p>
            </div>
            <div className="p-4 bg-muted rounded-lg text-center">
              <p className="font-bold text-lg mb-2">30%</p>
              <p className="text-sm text-muted-foreground">最終プロジェクト</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-muted-foreground">評価ポイント</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-muted-foreground">AIツールの適切な活用</li>
              <li className="text-muted-foreground">問題解決アプローチ</li>
              <li className="text-muted-foreground">チームワーク</li>
              <li className="text-muted-foreground">プロジェクト完成度</li>
              <li className="text-muted-foreground">ドキュメンテーション</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <ThemeToggle />
      <div className="container mx-auto max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Slide
              title={slides[currentSlide].title}
            >
              {slides[currentSlide].content}
            </Slide>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={prevSlide}
            className="group hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            前へ
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={nextSlide}
            className="group hover:bg-accent hover:text-accent-foreground"
          >
            次へ
            <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-4"
                  : "bg-muted"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default SlideDeck;

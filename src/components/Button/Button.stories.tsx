import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Add as AddIcon, ArrowForward as ArrowIcon } from "@mui/icons-material";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button은 사용자가 특정 행동(Action)을 수행하도록 유도하는 핵심 인터랙티브 컴포넌트입니다. 다양한 상황(Primary / Secondary / Ghost / Link / Danger)에 맞춰 일관된 스타일과 행동 방식을 제공합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "link", "danger"],
      description: "버튼의 Semantic 역할",
      table: {
        type: { summary: "primary | secondary | ghost | link | danger" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼 높이 및 아이콘/타이포 스케일 대응",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    iconOnly: {
      control: "boolean",
      description: "아이콘만 표시 (텍스트 숨김)",
    },
    loading: {
      control: "boolean",
      description: "로딩 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    selected: {
      control: "boolean",
      description: "선택된 상태 (hover 스타일과 동일)",
    },
    children: {
      control: "text",
      description: "버튼 텍스트",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const noControls = { controls: { disable: true } };

/**
 * Controls 패널에서 variant, size, state 등을 자유롭게 조합해보세요.
 */
export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    startIcon: <AddIcon />,
    endIcon: <ArrowIcon />,
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/xcmINexB75xqRxuAWQNWJV/Nota-Design-System--SSOT-?node-id=3440-5151",
    },
  },
};

/**
 * Primary · Secondary · Ghost · Link · Danger
 */
export const Type: Story = {
  render: () => (
    <div className="flex items-center gap-spacing-16 p-spacing-32 bg-color-layout-main">
      <Button variant="primary" startIcon={<AddIcon />}>
        Primary
      </Button>
      <Button variant="secondary" startIcon={<AddIcon />}>
        Secondary
      </Button>
      <Button variant="ghost" startIcon={<AddIcon />}>
        Ghost
      </Button>
      <Button variant="link" startIcon={<AddIcon />}>
        Link
      </Button>
      <Button variant="danger" startIcon={<AddIcon />}>
        Danger
      </Button>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    ...noControls,
    design: {
      type: "figma",
      url: "https://www.figma.com/design/xcmINexB75xqRxuAWQNWJV/Nota-Design-System--SSOT-?node-id=3440-5151",
    },
  },
};

/**
 * Small (32px) · Medium (36px) · Large (40px)
 */
export const Size: Story = {
  render: () => (
    <div className="flex items-end gap-spacing-16 p-spacing-32 bg-color-layout-main">
      <Button size="small" startIcon={<AddIcon />}>
        Small
      </Button>
      <Button size="medium" startIcon={<AddIcon />}>
        Medium
      </Button>
      <Button size="large" startIcon={<AddIcon />}>
        Large
      </Button>
    </div>
  ),
  parameters: { layout: "fullscreen", ...noControls },
};

/**
 * Default · Hover(마우스 올리기) · Focus(탭 키) · Selected · Loading · Disabled
 */
export const State: Story = {
  render: () => (
    <div className="flex items-center gap-spacing-16 p-spacing-32 bg-color-layout-main">
      <Button startIcon={<AddIcon />}>Default</Button>
      <Button startIcon={<AddIcon />} selected>
        Selected
      </Button>
      <Button startIcon={<AddIcon />} loading>
        Loading
      </Button>
      <Button startIcon={<AddIcon />} disabled>
        Disabled
      </Button>
    </div>
  ),
  parameters: { layout: "fullscreen", ...noControls },
};

/**
 * Text + Icon · Icon Only
 */
export const IconUsage: Story = {
  render: () => (
    <div className="flex items-center gap-spacing-24 p-spacing-32 bg-color-layout-main">
      <div className="flex flex-col items-center gap-spacing-8">
        <Button startIcon={<AddIcon />} endIcon={<ArrowIcon />}>
          Button
        </Button>
        <span className="text-color-text-secondary text-xs">
          startIcon + endIcon
        </span>
      </div>
      <div className="flex flex-col items-center gap-spacing-8">
        <Button startIcon={<AddIcon />}>Button</Button>
        <span className="text-color-text-secondary text-xs">startIcon</span>
      </div>
      <div className="flex flex-col items-center gap-spacing-8">
        <Button endIcon={<ArrowIcon />}>Button</Button>
        <span className="text-color-text-secondary text-xs">endIcon</span>
      </div>
      <div className="flex flex-col items-center gap-spacing-8">
        <Button iconOnly icon={<AddIcon />}>
          btn
        </Button>
        <span className="text-color-text-secondary text-xs">iconOnly</span>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen", ...noControls },
};

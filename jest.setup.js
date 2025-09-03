import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock HeroUI components
jest.mock('@heroui/react', () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
  Card: ({ children, ...props }) => <div {...props}>{children}</div>,
  CardBody: ({ children, ...props }) => <div {...props}>{children}</div>,
  CardHeader: ({ children, ...props }) => <div {...props}>{children}</div>,
  Input: ({ ...props }) => <input {...props} />,
  Modal: ({ children, isOpen, onOpenChange, placement, size, scrollBehavior, ...props }) => 
    isOpen ? <div data-testid="modal" {...props}>{children}</div> : null,
  ModalContent: ({ children, ...props }) => <div data-testid="modal-content" {...props}>{typeof children === 'function' ? children() : children}</div>,
  ModalHeader: ({ children, ...props }) => <div data-testid="modal-header" {...props}>{children}</div>,
  ModalBody: ({ children, ...props }) => <div data-testid="modal-body" {...props}>{children}</div>,
  ModalFooter: ({ children, ...props }) => <div data-testid="modal-footer" {...props}>{children}</div>,
  Textarea: ({ ...props }) => <textarea {...props} />,
  HeroUIProvider: ({ children, ...props }) => <div {...props}>{children}</div>,
  useDisclosure: () => ({
    isOpen: false,
    onOpen: jest.fn(),
    onClose: jest.fn(),
    onOpenChange: jest.fn(),
  }),
}))

// Mock react-hot-toast
jest.mock('react-hot-toast', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    loading: jest.fn(),
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => children,
}))

// Only suppress the specific JSDOM navigation warning (this is acceptable)
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    const message = args[0];
    
    // Only suppress JSDOM limitations - not React warnings
    if (
      typeof message === 'string' &&
      message.includes('Not implemented: navigation')
    ) {
      return;
    }
    
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
